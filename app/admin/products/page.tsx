import { useRouter } from "next/navigation";
import { useEffect } from "react";  
import { getSession } from "@/lib/auth";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const user = getSession();
    if (!user || user.role !== "admin"){
      router.push("/");
    }
  }, [router]);

  return (
    <section className="page-section">
      <h1 className="page-heading">Admin — Products</h1>
      <p>Only admins can see this page.</p>

      
    </section>
  );
}
