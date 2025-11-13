import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import { FormField } from '../forms/FormField';
import { toast } from 'sonner@2.0.3';
import { CheckCircle2, Plus, X, Save } from 'lucide-react';
import type { Service, Project } from '../../types/DeveloperOnboarding';

interface ManageProjectServicesDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
  currentServices: Service[];
  globalCatalog: Service[];
  onSave: (serviceIds: string[], newServices: Service[], addToCatalog: boolean) => void;
}

export function ManageProjectServicesDialog({
  isOpen,
  onClose,
  project,
  currentServices,
  globalCatalog,
  onSave
}: ManageProjectServicesDialogProps) {
  const [selectedServiceIds, setSelectedServiceIds] = React.useState<string[]>(
    currentServices.map(s => s.id)
  );
  const [newService, setNewService] = React.useState({
    name: '',
    category: 'Development',
    rate: 150,
    responseTime: '24 hours'
  });
  const [tempNewServices, setTempNewServices] = React.useState<Service[]>([]);
  const [addToCatalog, setAddToCatalog] = React.useState(true);

  // Reset when dialog opens/closes
  React.useEffect(() => {
    if (isOpen) {
      setSelectedServiceIds(currentServices.map(s => s.id));
      setTempNewServices([]);
      setNewService({
        name: '',
        category: 'Development',
        rate: 150,
        responseTime: '24 hours'
      });
    }
  }, [isOpen, currentServices]);

  const handleToggleService = (serviceId: string) => {
    setSelectedServiceIds(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleAddNewService = () => {
    if (!newService.name) {
      toast.error('Please enter a service name');
      return;
    }

    const service: Service = {
      id: `temp-${Date.now()}`,
      ...newService,
      projectIds: [project.id]
    };

    setTempNewServices(prev => [...prev, service]);
    setNewService({
      name: '',
      category: 'Development',
      rate: 150,
      responseTime: '24 hours'
    });
    toast.success('Service added');
  };

  const handleRemoveTempService = (serviceId: string) => {
    setTempNewServices(prev => prev.filter(s => s.id !== serviceId));
  };

  const handleApply = () => {
    // Optimistic update
    onSave(selectedServiceIds, tempNewServices, addToCatalog);
    toast.success('Project services updated successfully');
    onClose();
  };

  // Get available services (not already selected)
  const availableServices = globalCatalog.filter(
    service => !currentServices.some(cs => cs.id === service.id)
  );

  const hasChanges = 
    selectedServiceIds.length !== currentServices.length ||
    selectedServiceIds.some(id => !currentServices.some(cs => cs.id === id)) ||
    tempNewServices.length > 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Manage Services for {project.name}</DialogTitle>
          <DialogDescription>
            Select which services you want to offer for this project
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Current Project Services */}
          <div>
            <h3 className="text-brand-neutral-950 mb-3">Current Services</h3>
            <div className="space-y-2">
              {currentServices.length > 0 ? (
                currentServices.map(service => (
                  <div
                    key={service.id}
                    className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedServiceIds.includes(service.id)
                        ? 'border-brand-accent bg-brand-accent/10'
                        : 'border-brand-neutral-300 bg-white hover:border-brand-accent/50'
                    }`}
                    onClick={() => handleToggleService(service.id)}
                  >
                    <Checkbox
                      checked={selectedServiceIds.includes(service.id)}
                      onCheckedChange={() => handleToggleService(service.id)}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-brand-neutral-950">{service.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          ${service.rate}/hr
                        </Badge>
                      </div>
                      <p className="text-sm text-brand-neutral-600">
                        {service.category} • Response: {service.responseTime}
                      </p>
                    </div>
                    {selectedServiceIds.includes(service.id) && (
                      <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                    )}
                  </div>
                ))
              ) : (
                <p className="text-brand-neutral-600 text-sm text-center py-4">
                  No services configured yet
                </p>
              )}
            </div>
          </div>

          {/* Available Services from Global Catalog */}
          {availableServices.length > 0 && (
            <div>
              <h3 className="text-brand-neutral-950 mb-3">
                Available from Your Catalog ({availableServices.length})
              </h3>
              <div className="space-y-2">
                {availableServices.map(service => (
                  <div
                    key={service.id}
                    className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedServiceIds.includes(service.id)
                        ? 'border-brand-accent bg-brand-accent/10'
                        : 'border-brand-neutral-300 bg-white hover:border-brand-accent/50'
                    }`}
                    onClick={() => handleToggleService(service.id)}
                  >
                    <Checkbox
                      checked={selectedServiceIds.includes(service.id)}
                      onCheckedChange={() => handleToggleService(service.id)}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-brand-neutral-950">{service.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          ${service.rate}/hr
                        </Badge>
                      </div>
                      <p className="text-sm text-brand-neutral-600">
                        {service.category} • Response: {service.responseTime}
                      </p>
                    </div>
                    {selectedServiceIds.includes(service.id) && (
                      <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add New Service Inline */}
          <div className="border-2 border-brand-accent/50 rounded-lg p-4 bg-brand-accent/5">
            <h3 className="text-brand-neutral-950 mb-3">Add New Service</h3>
            
            <div className="space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                <FormField label="Service Name" id="newServiceName">
                  <Input
                    id="newServiceName"
                    placeholder="e.g., Security Audit"
                    value={newService.name}
                    onChange={(e) => setNewService(prev => ({ ...prev, name: e.target.value }))}
                  />
                </FormField>

                <FormField label="Rate ($/hour)" id="newServiceRate">
                  <Input
                    id="newServiceRate"
                    type="number"
                    placeholder="150"
                    value={newService.rate.toString()}
                    onChange={(e) => setNewService(prev => ({ ...prev, rate: parseInt(e.target.value) || 0 }))}
                  />
                </FormField>
              </div>

              <div className="flex items-center gap-3 p-2 bg-white border border-brand-accent/30 rounded">
                <Checkbox
                  id="addToCatalog"
                  checked={addToCatalog}
                  onCheckedChange={(checked) => setAddToCatalog(!!checked)}
                />
                <label 
                  htmlFor="addToCatalog" 
                  className="text-sm text-brand-neutral-950 cursor-pointer flex-1"
                >
                  Add to my global catalog
                </label>
              </div>

              <Button onClick={handleAddNewService} className="w-full gap-2" size="sm">
                <Plus className="h-4 w-4" />
                Add Service
              </Button>
            </div>

            {/* Temporary New Services */}
            {tempNewServices.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm text-brand-neutral-700">New Services:</p>
                {tempNewServices.map(service => (
                  <div
                    key={service.id}
                    className="flex items-center gap-3 p-2 border-2 border-brand-success/50 bg-brand-success/10 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-brand-neutral-950 text-sm">{service.name}</span>
                        <Badge variant="secondary" className="text-xs bg-brand-success/20 text-brand-success border-brand-success/30">
                          ${service.rate}/hr
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          New
                        </Badge>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemoveTempService(service.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleApply} className="gap-2" disabled={!hasChanges}>
              <Save className="h-4 w-4" />
              Apply Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
