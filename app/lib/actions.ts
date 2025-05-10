'use server';

import sql from '@/app/lib/db';

export async function createBike(formData: FormData) {
    const title = formData.get('title') as string;
    const location = formData.get('location') as string;
    const description = formData.get('description') as string;
    const available = formData.get('available') === 'on';

    try {
        await sql`
      INSERT INTO bikes (title, location, description, available)
      VALUES (${title}, ${location}, ${description}, ${available})
    `;
    } catch (error) {
        console.error('Error inserting bike:', error);
        throw new Error('Failed to create bike');
    }
}

export async function getAllBikes() {
    const res = await sql`SELECT * FROM bikes ORDER BY id DESC`;
    return res;
}

export async function deleteBikeById(id: number) {
    await sql`DELETE FROM bikes WHERE id = ${id}`;
}