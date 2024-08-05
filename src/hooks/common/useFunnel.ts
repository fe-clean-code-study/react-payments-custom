import { PropsWithChildren, useCallback, useMemo, useState } from "react";

interface StepProps {
  name: string;
}

export const useFunnel = () => {
  const [currentStep, setCurrentStep] = useState<string>();

  const setStep = useCallback((step: string) => {
    setCurrentStep(step);
  }, []);

  const Funnel = useMemo(() => {
    const FunnelComponent = ({ children }: PropsWithChildren) => {
      return children;
    };

    FunnelComponent.Step = ({
      name,
      children,
    }: PropsWithChildren<StepProps>) => {
      return currentStep === name ? children : null;
    };

    return FunnelComponent;
  }, [currentStep]);

  return [Funnel, setStep] as const;
};
