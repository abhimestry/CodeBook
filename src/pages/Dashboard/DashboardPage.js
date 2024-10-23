import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCard"
import { DashboardEmpty } from "./components/DashboardEmpty"
import { getUserOrders } from "../../Services/dataService";

export const DashboardPage = () => { 
    const [orders, setOrders] = useState([]);
    useEffect (()=> {
        
        async function fetchOrders() {
            const data= await getUserOrders();             
            setOrders(data);
        }
        fetchOrders();
    },[]);
    return (
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        </section>
        <section>
        
            {orders.length >0   && orders.map((order)=>(               
                <DashboardCard key={order.id} order={order} />
            )) }
        </section>
        
        { !orders.length && <DashboardEmpty /> }
        <section>

        </section>
      </main>
    )
  }