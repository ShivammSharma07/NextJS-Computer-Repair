import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import BackButton from "@/components/BackButton";
import TicketForm from "./TicketForm";

export default async function TicketFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { ticketId, customerId } = await searchParams;

    if (!ticketId && !customerId) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Customer Id or Ticket id require to load ticket form
          </h2>
          <BackButton title="Go back" variant="default" />
        </>
      );
      // New Ticket form
    }
    if (customerId) {
      const customer = await getCustomer(Number(customerId));

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer not found</h2>
            <BackButton title="Go back" variant="default" />
          </>
        );
      }

      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">Customer not active</h2>
            <BackButton title="Go back" variant="default" />
          </>
        );
      }

      console.log(customer);
      return <TicketForm customer={customer} />;
    }

    if (ticketId) {
      const ticket = await getTicket(Number(ticketId));

      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">Ticket not found</h2>
            <BackButton title="Go back" variant="default" />
          </>
        );
      }

      const customer = await getCustomer(Number(ticket.customerId));

      // return ticket form
      console.log("ticket: ", ticket);
      console.log("customer: ", customer);
      return <TicketForm customer={customer} ticket={ticket} />;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}
