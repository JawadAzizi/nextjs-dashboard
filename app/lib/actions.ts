'use server'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import {z } from 'zod'
const FormSchema = z.object({
    id: z.string(),
    customerId : z.string(),
    status: z.enum(['pending', "paid"]),
    amount: z.coerce.string(),
    date: z.string()
})
const CreateInvoice = FormSchema.omit({id: true, date: true})

export async function createInvoice(formData: FormData){
    const {amount, customerId, status} = CreateInvoice.parse({
        customerId : formData.get("customerId"),
        amount : formData.get("amount"),
        status: formData.get("status")
    })
 
    const amountCents = amount * 100;
    const date  = new Date().toISOString().split('T')[0]

    try{
        await sql`INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountCents}, ${status}, ${date})
        `;

    }catch (e){
        console.log("erro: ==>", e)
    }

    revalidatePath('/dashboard/invoices')
    redirect('/dashboard/invoices')

}

const UpdateInvoice = FormSchema.omit({id: true, date: true})
export async function updateInvoice(id: string, formData: FormData){
    const {status, customerId, amount }  = UpdateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    })
    const amountCents = amount * 100;
    
    await sql`
    UPDATE invoices 
    SET customer_id = ${customerId}, amount = ${amountCents}, status = ${status}
    where id = ${id}
    `
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string){
    await sql`DELETE FROM invoices where id = ${id}`;
    revalidatePath('/dashboard/invoices');
}