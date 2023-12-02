import { Card } from "../ui/dashboard/cards";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import NavLinks from "../ui/dashboard/nav-links";
import RevenueChart from "../ui/dashboard/revenue-chart";

export default function Page(){
    return (
    <>
    <p>Dashboard Page</p>
    <Card />
    <RevenueChart />
    <LatestInvoices />

    </>)
}