import NavLinks from "../ui/dashboard/nav-links";
import SideNav from "../ui/dashboard/sidenav";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
    <>
    <div className="flex">
        <div>
    <SideNav />

        </div>
    <div className="w-[100%]">{children}</div>
    </div>

    </>
    )
}