"use server";

import { createBike } from '@/app/lib/actions';

export default async function CreateBikePage() {

    return (
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ textAlign: 'center', color: 'inherit' }}>Add new bike</h1>
            <form action={createBike}>
                <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', marginBottom: 8, color: '#f0f0f0' }}>Name</label>
                    <input name="title" required style={{ width: '100%', padding: ' 0.4rem 0.8rem', borderRadius: '4px' }} />
                </div>

                <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', marginBottom: 8, color: '#f0f0f0' }}>Description</label>
                    <textarea name="description" rows={4} style={{ width: '100%', padding: ' 0.4rem 0.8rem', borderRadius: '4px' }} />
                </div>

                <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', marginBottom: 8, color: '#f0f0f0' }}>Location</label>
                    <input name="location" style={{ width: '100%', padding: ' 0.4rem 0.8rem', borderRadius: '4px' }} />
                </div>

                <div style={{ marginBottom: 16 }}>
                    <label style={{ color: '#f0f0f0' }}>
                        Available
                        <input type="checkbox" name="available" style={{ marginLeft: '8px', position: 'relative', top: '2px' }} />
                    </label>
                </div>

                <div style={{ textAlign: 'right' }}>
                    <button type="submit" style={{ padding: '0.4rem 0.8rem' }}>Submit</button>
                </div>
            </form>
        </div>
    );
}
