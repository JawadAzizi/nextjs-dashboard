import NavLinks from "../ui/dashboard/nav-links";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
    <>
    <div className="flex">
        <div>
    <NavLinks />

        </div>
    <div>{children}</div>
    </div>

    </>
    )
}