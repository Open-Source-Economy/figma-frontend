import React from 'react';
import { CategoryFilters } from '../ui/CategoryFilters';
import { MaintainerServiceCard } from '../ui/MaintainerServiceCard';
import { getAvailabilityColor } from '../../../data/maintainerProfileData';
import { LucideIcon } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  baseRate: number;
  availability: 'available' | 'limited' | 'unavailable';
  responseTime?: string;
  minHours?: number;
}

interface CategoryOption {
  key: string;
  label: string;
  icon: LucideIcon;
}

interface MaintainerServicesSectionProps {
  services: Service[];
  categoryOptions: CategoryOption[];
  categoryIcons: Record<string, LucideIcon>;
  className?: string;
}

/**
 * MaintainerServicesSection - Services filtering and display
 * Shows filterable list of services offered by the maintainer
 */
export const MaintainerServicesSection: React.FC<MaintainerServicesSectionProps> = ({
  services,
  categoryOptions,
  categoryIcons,
  className = '',
}) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const filteredServices = selectedCategory
    ? services.filter(s => s.category === selectedCategory)
    : services;

  return (
    <section className={`py-10 border-b border-brand-neutral-300 ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-6">
          <h2 className="text-brand-neutral-950 mb-2">Available Services</h2>
          <p className="text-brand-neutral-600">
            Professional services with transparent pricing that supports the open source ecosystem
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilters
          categories={categoryOptions}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          className="mb-6"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {filteredServices.map((service) => {
            const Icon = categoryIcons[service.category];
            const availabilityColor = getAvailabilityColor(service.availability);
            
            return (
              <MaintainerServiceCard
                key={service.id}
                service={service}
                categoryIcon={Icon}
                availabilityColor={availabilityColor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
