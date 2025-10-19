import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Check, ArrowRight } from 'lucide-react';
import type { ServicePackage } from '../../data/projectDetailData';

interface ServicesPricingProps {
  consultationRate: number;
  supportContract: {
    monthlyPrice: number;
    hoursIncluded: number;
    features: string[];
  };
  customDevelopmentAvailable: boolean;
  onRequestConsultation?: () => void;
  onRequestSupport?: () => void;
  onRequestCustom?: () => void;
}

export function ServicesPricing({
  consultationRate,
  supportContract,
  customDevelopmentAvailable,
  onRequestConsultation,
  onRequestSupport,
  onRequestCustom
}: ServicesPricingProps) {
  const packages: ServicePackage[] = [
    {
      name: 'Consultation',
      price: consultationRate,
      period: 'hour',
      features: [
        '1-on-1 architecture review',
        'Code review & best practices',
        'Migration planning guidance',
        'Performance optimization tips',
        'Q&A session with expert',
        'No long-term commitment'
      ],
      cta: 'Book Consultation'
    },
    {
      name: 'Support Contract',
      price: supportContract.monthlyPrice,
      period: 'month',
      features: [
        `${supportContract.hoursIncluded} hours/month consulting`,
        ...supportContract.features,
        'Rollover up to 5 hours'
      ],
      cta: 'Get Support Contract'
    },
    {
      name: 'Custom Development',
      price: 'custom',
      features: [
        'Dedicated feature development',
        'Integration & migration support',
        'Team training & workshops',
        'Long-term partnership options',
        'Flexible engagement models',
        'Full code ownership transfer'
      ],
      cta: 'Request Proposal'
    }
  ];

  const handleCTA = (packageName: string) => {
    if (packageName === 'Consultation' && onRequestConsultation) {
      onRequestConsultation();
    } else if (packageName === 'Support Contract' && onRequestSupport) {
      onRequestSupport();
    } else if (packageName === 'Custom Development' && onRequestCustom) {
      onRequestCustom();
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {packages.map((pkg, index) => {
        const isPopular = index === 1;
        
        return (
          <div
            key={pkg.name}
            className={`relative bg-brand-card-blue border rounded-xl p-8 transition-all ${
              isPopular
                ? 'border-brand-accent shadow-lg shadow-brand-accent/10 md:scale-105'
                : 'border-brand-neutral-300 hover:border-brand-accent/50'
            }`}
          >
            {isPopular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white border-0">
                Most Popular
              </Badge>
            )}

            <div className="mb-6">
              <h3 className="text-brand-neutral-900 mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1">
                {pkg.price === 'custom' ? (
                  <span className="text-brand-neutral-900">Custom Quote</span>
                ) : (
                  <>
                    <span className="text-brand-accent">
                      ${pkg.price.toLocaleString()}
                    </span>
                    <span className="text-brand-neutral-600">/{pkg.period}</span>
                  </>
                )}
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-brand-success flex-shrink-0 mt-0.5" />
                  <span className="text-brand-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              variant={isPopular ? 'default' : 'outline'}
              onClick={() => handleCTA(pkg.name)}
            >
              {pkg.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      })}
    </div>
  );
}
