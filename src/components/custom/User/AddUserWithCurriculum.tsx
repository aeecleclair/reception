import {
  CoreUserSimple,
  getUsersSearch,
  postCdrUsersUserIdCurriculumsCurriculumId,
} from "@/api";
import { CustomDialog } from "@/components/custom/CustomDialog";
import { LoadingButton } from "@/components/custom/LoadingButton";
import { Button } from "@/components/ui/button";
import { Command, CommandItem } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useCurriculums } from "@/hooks/useCurriculums";
import { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi2";

function getDisplayName(user: CoreUserSimple) {
  if (!user.nickname) {
    return user.firstname + " " + user.name;
  }
  return user.firstname + " " + user.name + " (" + user.nickname + ")";
}

export const AddUserWithCurriculum = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  async function submit() {
    setIsLoading(true);
    if (!selectedCurriculum || !selectedUser) {
      setIsLoading(false);
      return;
    }
    var data, error;

    const { data: patchData, error: patchError } =
      await postCdrUsersUserIdCurriculumsCurriculumId({
        path: {
          user_id: selectedUser.id,
          curriculum_id: selectedCurriculum,
        },
      });
    data = patchData;
    error = patchError;

    if (error) {
      toast({
        title: "Error",
        description: (error as { detail: String }).detail,
        variant: "destructive",
      });
      setIsLoading(false);
      setIsOpened(false);
      return;
    }
    setSelectedUser(undefined as unknown as CoreUserSimple);
    setQuery(undefined as unknown as string);
    setIsOpened(false);
    setIsLoading(false);
  }

  const [isOpened, setIsOpened] = useState(false);
  const { curriculums } = useCurriculums();
  const [selectedCurriculum, setSelectedCurriculum] = useState(
    curriculums.length > 0 ? curriculums[0].id : undefined,
  );

  const [query, setQuery] = useState(undefined as unknown as string);
  const [foundUsers, setFoundUsers] = useState([] as CoreUserSimple[]);

  const [selectedUser, setSelectedUser] = useState(
    undefined as unknown as CoreUserSimple,
  );

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => setIsOpened(true)}
        className="h-8"
      >
        <HiOutlinePlusCircle className="mr-2 h-4" />
        Ajouter
      </Button>
      <CustomDialog
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        title="Ajouter un cursus à un utilisateur"
        description={
          <div className="grid gap-6 mt-4">
            <div className="grid gap-2">
              <Label>Cursus</Label>
              <Select
                onValueChange={setSelectedCurriculum}
                defaultValue={selectedCurriculum}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent side="top">
                  {curriculums.map((curriculum) => (
                    <SelectItem key={curriculum.id} value={curriculum.id}>
                      <div className="flex items-center flex-row gap-2">
                        {curriculum.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label>Utilisateur</Label>

              <Input
                type="text"
                placeholder={
                  selectedUser
                    ? getDisplayName(selectedUser)
                    : "Chercher un utilisateur"
                }
                onChange={(query: React.ChangeEvent<HTMLInputElement>) => {
                  setQuery(query.target.value);
                  setSelectedUser(undefined as unknown as CoreUserSimple);

                  getUsersSearch({
                    query: {
                      query: query.target.value,
                    },
                  }).then((result) => {
                    setFoundUsers(result.data || []);
                  });
                }}
                value={selectedUser ? getDisplayName(selectedUser) : query}
              />

              <Command>
                <ScrollArea className="">
                  {foundUsers.map((user) => (
                    <CommandItem
                      key={user.id}
                      value={user.id}
                      onSelect={(userId) => {
                        setSelectedUser(user);
                        setFoundUsers([]);
                      }}
                    >
                      {getDisplayName(user)}
                    </CommandItem>
                  ))}
                </ScrollArea>
              </Command>

              <div className="flex justify-end mt-2 space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setIsOpened(false)}
                  disabled={isLoading}
                  className="w-[100px]"
                >
                  Annuler
                </Button>
                <LoadingButton
                  isLoading={isLoading}
                  className="w-[100px]"
                  type="button"
                  disabled={!selectedUser || !selectedCurriculum}
                  onClick={submit}
                >
                  Ajouter
                </LoadingButton>
              </div>
            </div>
          </div>
        }
      ></CustomDialog>
    </>
  );
};
