import React from 'react';
import { DeveloperService, Project, ResponseTimeType } from '../../../types/DeveloperOnboarding';
import { Button } from '../../ui/button';
import { Switch } from '../../ui/switch';
import { Clock, ChevronDown, Edit2, FolderGit2, DollarSign, MessageSquare, Layers, Info } from 'lucide-react';
import { BrandModal, BrandModalSection } from '../../ui/brand-modal';
import { InfoMessage } from '../../ui/info-message';
import { HelpText } from '../../ui/help-text';
import { SelectField } from '../../forms/SelectField';
import { InputWithAddon } from '../../forms/InputWithAddon';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../ui/collapsible';
import { ProjectSelector } from './ProjectSelector';
import { getServicesByType, getServiceById, getServiceTypeLabel, ServiceType } from '../../../data/servicesDefinitions';
import { getServiceTypeIcon } from '../../../utils/serviceHelpers';
import { ExpandableCommentSection } from '../availability/ExpandableCommentSection';
import { ServiceRateDialogContent } from './ServiceRateDialog';

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (services: DeveloperService[]) => void;
  projects: Project[];
  baseRate: number;
  currency: string;
  editingService?: DeveloperService;
  mode: 'add' | 'edit';
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  open,
  onClose,
  onSave,
  projects,
  baseRate,
  currency,
  editingService,
  mode,
}) => {
  // ADD MODE: Simple multi-select
  const [selectedServiceIds, setSelectedServiceIds] = React.useState<string[]>([]);
  const [openCategories, setOpenCategories] = React.useState<Record<string, boolean>>({
    support: true,
    development: true,
    advisory: true,
    security_and_compliance: true,
  });
  
  // EDIT MODE: Single service configuration
  const [projectIds, setProjectIds] = React.useState<string[]>([]);
  const [useCustomRate, setUseCustomRate] = React.useState<boolean>(false);
  const [hourlyRate, setHourlyRate] = React.useState<string>('');
  const [responseTimeHours, setResponseTimeHours] = React.useState<string>('none');
  const [comment, setComment] = React.useState<string>('');
  const [editingRate, setEditingRate] = React.useState<boolean>(false);
  const [showCommentField, setShowCommentField] = React.useState<boolean>(false);

  // Initialize edit mode
  React.useEffect(() => {
    if (open && mode === 'edit' && editingService) {
      setProjectIds(editingService.projectIds || []);
      setUseCustomRate(!!editingService.hourlyRate);
      setHourlyRate(editingService.hourlyRate?.toString() || '');
      setResponseTimeHours(editingService.responseTimeHours?.toString() || 'none');
      setComment(editingService.comment || '');
      setEditingRate(false);
      setShowCommentField(!!editingService.comment);
    } else if (open && mode === 'add') {
      // Reset add mode
      setSelectedServiceIds([]);
    }
  }, [open, mode, editingService]);

  const toggleService = (serviceId: string) => {
    if (selectedServiceIds.includes(serviceId)) {
      setSelectedServiceIds(prev => prev.filter(id => id !== serviceId));
    } else {
      setSelectedServiceIds(prev => [...prev, serviceId]);
    }
  };

  const handleSave = () => {
    if (mode === 'add') {
      // Add mode: Create services with default configuration
      const newServices: DeveloperService[] = selectedServiceIds.map(serviceId => {
        const serviceDef = getServiceById(serviceId);
        if (!serviceDef) return null;
        
        return {
          id: `dev-svc-${Date.now()}-${serviceId}`,
          serviceId,
          serviceName: serviceDef.name,
          serviceType: serviceDef.serviceType,
          hasResponseTime: serviceDef.hasResponseTime,
          enabled: true,
          projectIds: projects.map(p => p.id), // Default: all projects
          hourlyRate: undefined, // Default: use base rate
          responseTimeHours: undefined, // Default: no commitment
          comment: undefined,
        };
      }).filter(Boolean) as DeveloperService[];

      if (newServices.length > 0) {
        onSave(newServices);
        onClose();
      }
    } else {
      // Edit mode: Update single service
      if (!editingService) return;
      
      const serviceDef = getServiceById(editingService.serviceId);
      if (!serviceDef || projectIds.length === 0) return;

      const updatedService: DeveloperService = {
        ...editingService,
        projectIds,
        hourlyRate: useCustomRate && hourlyRate ? parseFloat(hourlyRate) : undefined,
        responseTimeHours: responseTimeHours && responseTimeHours !== 'none' ? parseInt(responseTimeHours) as ResponseTimeType : undefined,
        comment: comment || undefined,
      };

      onSave([updatedService]);
      onClose();
    }
  };

  const serviceCategories: ServiceType[] = ['support', 'development', 'advisory', 'security_and_compliance'];
  
  const canSave = mode === 'add' 
    ? selectedServiceIds.length > 0 
    : projectIds.length > 0;
  
  const selectedService = mode === 'edit' && editingService 
    ? getServiceById(editingService.serviceId) 
    : null;

  const displayRate = useCustomRate && hourlyRate ? parseFloat(hourlyRate) : baseRate;

  return (
    <BrandModal
      open={open}
      onClose={onClose}
      title={mode === 'add' ? 'Add Services' : editingService?.serviceName || ''}
      description={mode === 'add' 
        ? 'Select services to add with default settings' 
        : selectedService ? getServiceTypeLabel(selectedService.serviceType) : ''}
      size={mode === 'add' ? '3xl' : '2xl'}
      preventAutoFocus={true}
      footer={
        <div className="flex items-center justify-end w-full gap-3">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!canSave}
            className="bg-gradient-to-r from-brand-accent to-brand-highlight hover:from-brand-accent-dark hover:to-brand-highlight-dark text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {mode === 'add' 
              ? (selectedServiceIds.length > 0 
                  ? `Add ${selectedServiceIds.length} Service${selectedServiceIds.length !== 1 ? 's' : ''}` 
                  : 'Add Services')
              : 'Save Changes'}
          </Button>
        </div>
      }
    >
      <div className="space-y-6 py-2">
        {/* ADD MODE: Simple service selection */}
        {mode === 'add' && (
          <BrandModalSection
            icon={<Layers />}
            title="Select Services"
            description="Choose one or more services to add with default settings"
            iconColor="accent"
          >
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
              {serviceCategories.map((category) => {
              const Icon = getServiceTypeIcon(category);
              const categoryServices = getServicesByType(category);
              const selectedInCategory = categoryServices.filter(s => selectedServiceIds.includes(s.id)).length;
              const isOpen = openCategories[category] ?? true;

              return (
                <Collapsible
                  key={category}
                  open={isOpen}
                  onOpenChange={(open) => setOpenCategories(prev => ({ ...prev, [category]: open }))}
                >
                  <div className="bg-brand-card-blue/50 rounded-lg border border-brand-neutral-300/30">
                    {/* Category Header */}
                    <CollapsibleTrigger asChild>
                      <button className="w-full flex items-center justify-between p-3 hover:bg-brand-accent/5 transition-all rounded-t-lg cursor-pointer">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-4 h-4 text-brand-accent" />
                          </div>
                          <div className="text-left">
                            <h4 className="text-sm text-brand-neutral-900">{getServiceTypeLabel(category)}</h4>
                            {selectedInCategory > 0 && (
                              <span className="text-xs text-brand-accent">
                                {selectedInCategory} selected
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-brand-neutral-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </CollapsibleTrigger>

                    {/* Category Services */}
                    <CollapsibleContent>
                      <div className="px-3 pb-3 space-y-2">
                        {categoryServices.map((serviceDef) => {
                          const isSelected = selectedServiceIds.includes(serviceDef.id);
                          
                          return (
                            <div
                              key={serviceDef.id}
                              onClick={() => toggleService(serviceDef.id)}
                              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                                isSelected
                                  ? 'bg-brand-accent/10 border-brand-accent'
                                  : 'bg-brand-card-blue/50 border-brand-neutral-300/20 hover:border-brand-accent/30'
                              }`}
                            >
                              <div className="flex items-start gap-2.5">
                                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center mt-0.5 flex-shrink-0 transition-all ${
                                  isSelected
                                    ? 'border-brand-accent bg-brand-accent'
                                    : 'border-brand-neutral-400'
                                }`}>
                                  {isSelected && (
                                    <div className="w-2 h-2 rounded-sm bg-white" />
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm text-brand-neutral-900">
                                    {serviceDef.name}
                                  </div>
                                  <div className="text-xs text-brand-neutral-600 mt-1">
                                    {serviceDef.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              );
              })}
            </div>
          </BrandModalSection>
        )}

        {/* EDIT MODE: Minimal configuration */}
        {mode === 'edit' && selectedService && (
          <div className="space-y-6">
            {/* Service Header Card */}
            <div className="relative bg-gradient-to-br from-brand-card-blue/40 to-brand-card-blue/20 rounded-xl border border-brand-neutral-300/30 p-3 overflow-hidden">
              {/* Gradient accent overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-accent/5 to-brand-highlight/5 rounded-full blur-3xl -z-0" />
              
              <div className="relative z-10 flex items-start gap-3">
                {/* Service Icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-brand-accent/20 to-brand-highlight/20 rounded-lg flex items-center justify-center border border-brand-accent/20 flex-shrink-0">
                  {React.createElement(getServiceTypeIcon(selectedService.serviceType), {
                    className: "w-5 h-5 text-brand-accent"
                  })}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Service Name */}
                  <h3 className="text-brand-neutral-900 mb-0.5">
                    {editingService.serviceName}
                  </h3>

                  {/* Service Description */}
                  {selectedService.description && (
                    <p className="text-brand-neutral-600 text-sm">
                      {selectedService.description}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Projects */}
            <BrandModalSection
              icon={<FolderGit2 />}
              title="Project Selection"
              description="Choose which projects this service applies to"
              iconColor="accent"
            >
              <div className="space-y-2">
                <ProjectSelector
                  projects={projects}
                  selectedIds={projectIds}
                  onChange={setProjectIds}
                />
                {projectIds.length === 0 && (
                  <p className="text-xs text-brand-warning">Select at least one project</p>
                )}
              </div>
            </BrandModalSection>

            {/* Pricing & Response Time */}
            <BrandModalSection
              icon={<DollarSign />}
              title="Service Configuration"
              description="Set pricing, response time, and additional notes"
              iconColor="highlight"
            >
              <div className="space-y-4">
                {/* Hourly Rate Override */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <label className="text-sm text-brand-neutral-700">Hourly Rate</label>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-brand-neutral-500">
                        {useCustomRate ? 'Custom' : 'Base'}
                      </span>
                      <Switch
                        checked={useCustomRate}
                        onCheckedChange={(checked) => {
                          setUseCustomRate(checked);
                          if (!checked) setHourlyRate('');
                        }}
                      />
                    </div>
                  </div>
                  
                  {!useCustomRate ? (
                    <InputWithAddon
                      prefix={currency}
                      suffix="/hr"
                      value={baseRate.toString()}
                      displayMode={true}
                      icon={DollarSign}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-brand-card-blue/30 border border-brand-accent/30 rounded-lg focus-within:border-brand-accent focus-within:bg-brand-card-blue/50 transition-all w-fit">
                      <DollarSign className="w-4 h-4 text-brand-accent" />
                      <span className="text-sm text-brand-neutral-700">{currency}</span>
                      <input
                        type="number"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(e.target.value)}
                        placeholder={baseRate.toString()}
                        className="flex-1 min-w-0 bg-transparent border-none outline-none text-sm text-brand-neutral-900 placeholder:text-brand-neutral-500"
                        step="1"
                        min="0"
                      />
                      <span className="text-xs text-brand-neutral-500">/hr</span>
                    </div>
                  )}
                  
                  {/* Help Text with Learn More */}
                  <HelpText
                    learnMoreText="Learn more about service rates"
                    learnMoreTitle="Service-Specific Rates"
                    learnMoreDescription="Customize pricing for different services based on their complexity and value"
                    learnMoreContent={<ServiceRateDialogContent currency={currency} baseRate={baseRate} />}
                  >
                    {useCustomRate 
                      ? 'Custom rates let you adjust pricing for specific services based on complexity or demand.'
                      : `Using your base rate from Step 4 (${currency}${baseRate}/hr). Toggle to set a custom rate for this service if needed.`}
                  </HelpText>
                </div>

                {/* Response Time (if applicable) */}
                {selectedService.hasResponseTime && (
                  <div className="space-y-3">
                    <SelectField
                      label="Response Time"
                      options={[
                        { value: 'none', label: 'No commitment' },
                        { value: '24', label: '24 hours' },
                        { value: '48', label: '48 hours' },
                        { value: '72', label: '72 hours' },
                        { value: '168', label: '1 week' },
                      ]}
                      value={responseTimeHours}
                      onChange={setResponseTimeHours}
                    />
                    
                    <InfoMessage icon={Clock} variant="info">
                      Response time is your commitment to acknowledge and begin work on requests within the specified timeframe.
                    </InfoMessage>

                    {/* Additional Notes */}
                    <ExpandableCommentSection
                      isExpanded={showCommentField}
                      onToggleExpanded={setShowCommentField}
                      value={comment}
                      onChange={setComment}
                      onDelete={() => {
                        setComment('');
                        setShowCommentField(false);
                      }}
                      placeholder="Add any additional details or requirements for this service..."
                    />
                  </div>
                )}
              </div>
            </BrandModalSection>


          </div>
        )}
      </div>
    </BrandModal>
  );
};
