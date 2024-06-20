import { CdrStatus, Status, getCdrStatus, patchCdrStatus } from "@/api";
import { LoadingButton } from "@/components/custom/LoadingButton";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";

export const StatusAccordionItem = () => {
  const [status, setStatus] = useState<Status>({} as Status);
  const [refetchStatus, setRefetchStatus] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onGetStatus = async () => {
    const { data, error } = await getCdrStatus({});
    if (error) {
      console.log(error);
      return;
    }
    setStatus(data!);
  };

  useEffect(() => {
    if (refetchStatus) {
      onGetStatus();
      setRefetchStatus(false);
    }
  }, [refetchStatus]);

  const updateStatus = async (status: CdrStatus) => {
    setIsLoading(true);
    const body: Status = {
      status: status,
    };
    const { data, error } = await patchCdrStatus({
      body: body,
    });
    if (error) {
      console.log(error);
      setIsLoading(false);
      return;
    }
    setRefetchStatus(true);
    setIsLoading(false);
  };

  const statusLabels = {
    pending: "En attente",
    online: "En ligne",
    onsite: "Sur place",
    closed: "Fermé",
  };

  const nextStep: Record<CdrStatus, CdrStatus> = {
    pending: "online",
    online: "onsite",
    onsite: "closed",
    closed: "pending",
  };

  const statusButtonLabel = {
    pending: "Réinitialiser",
    online: "Mettre en ligne",
    onsite: "Sur place",
    closed: "Fermer",
  };

  return (
    <AccordionItem value="status">
      <AccordionTrigger>
        <div className="flex flex-col items-start justify-between">
          <h3 className="text-lg font-semibold">Status</h3>
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-2">
        {status && (
          <div className="flex flex-row space-y-2 justify-between items-center w-full">
            <span>
              {statusLabels[status.status as keyof typeof statusLabels]}
            </span>
            <LoadingButton
              onClick={() =>
                updateStatus(
                  nextStep[status.status as keyof typeof nextStep],
                )
              }
              isLoading={isLoading}
              className="w-[130px]"
            >
              {
                statusButtonLabel[
                  nextStep[
                    status.status as keyof typeof nextStep
                  ] as keyof typeof statusButtonLabel
                ]
              }
            </LoadingButton>
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};
