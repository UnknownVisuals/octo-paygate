import { PublicHeader } from "@/components/layout/PublicHeader";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 flex items-center justify-center py-16 bg-octo-gray-50">
        <LoginForm />
      </main>
      <PublicFooter />
    </>
  );
}
