import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

interface StepProps {
  name: string;
}

interface UseFunnelOptions<T extends string> {
  stepQueryKey?: string;
  initialStep?: T;
  onStepChange?: (step: T) => void;
}

export const useFunnel = <T extends string>(
  steps: readonly T[],
  options: UseFunnelOptions<T> = {}
) => {
  const {
    stepQueryKey = "funnel-step",
    initialStep = steps[0],
    onStepChange,
  } = options;

  const [currentStep, setCurrentStep] = useState<T>(initialStep);

  const setStep = useCallback(
    (step: T) => {
      setCurrentStep(step);
      if (onStepChange) {
        onStepChange(step);
      }
    },
    [onStepChange]
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const stepFromQuery = params.get(stepQueryKey);
    if (stepFromQuery && steps.includes(stepFromQuery as T)) {
      setStep(stepFromQuery as T);
    } else {
      setStep(initialStep);
    }
  }, [stepQueryKey, initialStep, setStep, steps]);

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
