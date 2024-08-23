import { applicationState } from "@/store/application/selector";
import { logout } from "@/store/application/slice";
import {
  useCreateSkillMutation,
  useDeleteSkillMutation,
  useGetAllSkillsQuery,
  useUpdateSkillMutation,
} from "@/store/skills/slice";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export interface AdminPageProps {}

export default function AdminPage() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const router = useRouter();
  const { token, loading } = useSelector(applicationState);

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token]);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const { data: skills, refetch: refetchSkills } = useGetAllSkillsQuery();

  const [addSkill, addSkillApi] = useCreateSkillMutation();
  useEffect(() => {
    if (addSkillApi.isSuccess) {
      refetchSkills();
      setName("");
      setImage("");
    }
  }, [addSkillApi.isSuccess]);

  // Global useEffect
  useEffect(() => {
    refetchSkills();
  }, []);

  // Delete skill
  const [deleteSkill, deleteSkillApi] = useDeleteSkillMutation();
  useEffect(() => {
    if (deleteSkillApi.isSuccess) {
      refetchSkills();
    }
  }, [deleteSkillApi.isSuccess]);

  // Update skill
  const [updateSkillName, setUpdateSkillName] = useState("");
  const [updateSkillImage, setUpdateSkillImage] = useState("");
  const [updateSkill, updateSkillApi] = useUpdateSkillMutation();

  useEffect(() => {
    if (updateSkillApi.isSuccess) {
      refetchSkills();
      setUpdateSkillName("");
      setUpdateSkillImage("");
    }
  }, [updateSkillApi.isSuccess]);

  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">
            Milan CAMUS — {t("admin.title")}
          </p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              onPress={() => {
                dispatch(logout());
                router.push("/login");
              }}
              color="primary"
              variant="flat"
            >
              {t("admin.navbar.logout")}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="flex">
        <div className="w-1/2 p-6 text-white">
          <Card className="w-[100%]">
            <CardHeader>
              <p className="text-xl">{t("admin.skills.title")}</p>
            </CardHeader>
            <CardBody>
              <div className="flex flex-wrap gap-2">
                {skills?.map((skill) => (
                  <Popover
                    showArrow
                    onOpenChange={() => {
                      setUpdateSkillName(skill.name);
                      setUpdateSkillImage(skill.image);
                    }}
                  >
                    <PopoverTrigger>
                      <Chip
                        variant="flat"
                        key={skill.id}
                        avatar={
                          <Avatar
                            name={skill.name}
                            src={skill.image}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        }
                      >
                        {skill.name}
                      </Chip>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2">
                        <Input
                          placeholder={t(
                            "admin.skills.inputs.name.placeholder"
                          )}
                          className="mb-1"
                          onChange={(e) => setUpdateSkillName(e.target.value)}
                          value={updateSkillName}
                        />
                        <Input
                          placeholder={t(
                            "admin.skills.inputs.image.placeholder"
                          )}
                          className="mb-1"
                          onChange={(e) => setUpdateSkillImage(e.target.value)}
                          value={updateSkillImage}
                        />
                        <Button
                          color="primary"
                          isLoading={updateSkillApi.isLoading}
                          onPress={() => {
                            updateSkill({
                              id: skill.id,
                              name: updateSkillName,
                              image: updateSkillImage,
                            });
                          }}
                        >
                          {t("admin.skills.update")}
                        </Button>
                        <Button
                          color="danger"
                          isLoading={deleteSkillApi.isLoading}
                          onPress={() => {
                            // Delete skill
                            deleteSkill(skill.id);
                          }}
                        >
                          {t("admin.skills.delete")}
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
              {skills?.length === 0 && <p>{t("admin.skills.empty")}</p>}
            </CardBody>
            <CardFooter>
              <Input
                placeholder={t("admin.skills.inputs.name.placeholder")}
                className="mr-1"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Input
                placeholder={t("admin.skills.inputs.image.placeholder")}
                className="ml-1 mr-1"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
              <Button
                className="ml-1"
                variant="flat"
                isLoading={addSkillApi.isLoading}
                onPress={() => {
                  addSkill({ name, image });
                }}
              >
                {t("admin.skills.add")}
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-1/2 bg-green-500 p-6 text-white">
          <Card className="w-[100%]">
            <CardBody></CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
