import React from 'react';
import { Button, Card, Typography } from "antd";
import styles from "./ServiceItem.module.css";

const ServiceItem = ({ name, content, price, img }) => {
  const handleBuy = () => {
    console.log(`Bought ${name} for ${price} руб.`);
  };

  const formattedPrice = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price);
  
  return (
    <Card
      hoverable
      className={styles.card}
      title={<h4>{name}</h4>}
      cover={<img src={img} alt={name} loading="lazy" width="100%" height="auto" />}
    >
      <div className={styles.contentContainer}>
        <Typography.Text className={styles.content}>
          {content}
        </Typography.Text>
        <div className={styles.priceContainer}>
          <Typography.Text className={styles.price}>
            {formattedPrice}
          </Typography.Text>
          <Button className={styles.buyButton} type="primary" onClick={handleBuy}>
            Купить
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ServiceItem;

