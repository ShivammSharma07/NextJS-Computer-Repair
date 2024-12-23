import { getCustomer } from "@/lib/queries/getCustomer";
import BackButton from "@/components/BackButton";
import CustomerForm from "./CustomerForm";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;
    // edit customer form
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

      console.log(customer);
      // Put customer form component
      return <CustomerForm customer={customer} />;
    } else {
      // new customer form component
      return <CustomerForm />;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}
