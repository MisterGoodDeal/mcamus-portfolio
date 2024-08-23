import { applicationState } from "@/store/application/selector";
import { useLoginMutation } from "@/store/application/slice";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Input,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function LoginPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading } = useSelector(applicationState);
  const [login, loginResponse] = useLoginMutation();

  useEffect(() => {
    if (loginResponse.isSuccess) {
      // Navigate to the dashboard
      router.push("/admin");
    }
  }, [loginResponse.isSuccess]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[500px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="IMG_1607_Original.jpg"
            loading="lazy"
            style={{ objectFit: "cover" }}
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">
              Milan <b>CAMUS</b>
            </p>
            <p className="text-small text-default-500">{t("global.job")}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-xl uppercase text-center mb-3">
            {t("login.title")}
          </p>
          <Input
            type="email"
            label={t("login.email.label")}
            placeholder={t("login.email.placeholder")}
            size="lg"
            className="mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label={t("login.password.label")}
            placeholder={t("login.password.placeholder")}
            size="lg"
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardBody>
        <Divider />
        <CardFooter className="flex jutify-end text-right">
          <Button
            color="primary"
            variant="flat"
            isLoading={loading}
            onPress={() => {
              login({ email, password });
            }}
          >
            {loading ? t("login.submitting") : t("login.submit")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
