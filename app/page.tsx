'use server';

import { Button, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { BikeCard } from "@/app/components/bike/bike-card";
import { getAllBikes } from "./lib/actions";

// const bikes = [{
//   title: 'bike1',
//   description: 'bmx',
//   location: 'Sarajevo'
// },
// {
//   title: 'bike2',
//   description: 'denis',
//   location: 'Tuzla'
// }, {
//   title: 'bike3',
//   description: 'ktm',
//   location: 'Zenica'
// }];

export default async function Home() {
  const bikes = await getAllBikes();

  return (
    <main>
      <Title style={{ textAlign: 'center', color: 'inherit' }}>Rent a Bike</Title>

      <Link href="/bike/create">
        <Button type="primary" style={{ marginBottom: '2rem' }}>Add Bike</Button>
      </Link>

      <div>
        <Row gutter={[24, 24]} justify="center">
          {bikes?.map((bike) => (
            <Col key={bike.title} xs={24} sm={12} md={8}>
              <BikeCard
                id={bike.id}
                title={bike.title}
                description={bike.description}
                location={bike.location}
              />
            </Col>
          ))}
        </Row>
      </div>


    </main>
  );
}
