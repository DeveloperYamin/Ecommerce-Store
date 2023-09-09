import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/MainNav";
import getCategories from "@/actions/getCategories";
import NavbarActions from "@/components/NavbarActions";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <header className="border-b">
      <Container>
        <div className="relative flex items-center h-16 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
            <p className="text-xl font-bold">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions/>
        </div>
      </Container>
    </header>
  );
};
 
export default Navbar;