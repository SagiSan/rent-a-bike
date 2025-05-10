'use client';

import { deleteBikeById } from '@/app/lib/actions';
import { Button, Card, message } from 'antd';
import Meta from 'antd/es/card/Meta';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    id: number;
    title: string;
    description: string;
    location?: string;
}

export const BikeCard: React.FC<Props> = ({ id, title, description, location }) => {
    // const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.stopPropagation();
    //     e.preventDefault();
    //     try {
    //         await deleteBikeById(id);
    //         message.success('Bike deleted successfully');
    //     } catch (err) {
    //         message.error('Failed to delete bike');
    //         console.error(err);
    //     }
    // };

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();

        try {
            const res = await fetch(`/api/bikes/${id}`, {
                method: 'DELETE',
            });

            if (!res.ok) throw new Error('Delete failed');

            message.success('Bike deleted successfully');
        } catch (err) {
            message.error('Failed to delete bike');
            console.error(err);
        }
    };

    return (
        <Link href={`/bike/${id}`}>
            <Card
                hoverable
                cover={
                    <Image
                        src="/bike-placeholder.png"
                        alt="Bike Image"
                        width={400}
                        height={200}
                        style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                    />
                }
                style={{ width: 400 }}
                actions={[
                    <Button danger onClick={handleDelete} key="delete">
                        Delete
                    </Button>,
                ]}
            >
                <Meta
                    title={title}
                    description={
                        <>
                            <p>{description}</p>
                            {location && (
                                <p style={{ marginTop: 8, fontStyle: 'italic', color: '#555' }}>
                                    Location: {location}
                                </p>
                            )}
                        </>
                    }
                />
            </Card>
        </Link>
    );
};
