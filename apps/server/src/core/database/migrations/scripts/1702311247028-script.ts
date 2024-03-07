import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {

try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('9f3451ff-e56d-4019-9484-ee3cad2ce358', '7Daisy_Kuhn20@gmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=9', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('99c7c50f-bf1c-4009-81e1-3d95731b17b1', '13Otis.Reichel@yahoo.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=15', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('b5d0ed52-e28e-4732-884e-4a8cbc616f06', '19Ofelia22@yahoo.com', 'Eva Brown', 'https://i.imgur.com/YfJQV5z.png?id=21', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('355bcef2-d63b-4ec4-97da-a69b5922e641', '25Hope_Gislason63@hotmail.com', 'Eva Brown', 'https://i.imgur.com/YfJQV5z.png?id=27', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('47760377-7338-472f-acc5-29a3b32f2063', '31Bernice.Hand@gmail.com', 'David Wilson', 'https://i.imgur.com/YfJQV5z.png?id=33', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('c5596227-16a9-4b47-995a-0d9ca5393df1', '37Eric66@gmail.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=39', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('b2cd54a1-8f3a-48a7-a4ad-daf1fd36b8cf', '43Precious70@gmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=45', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('c6aa2fb7-5b20-413f-b48d-03af48ea0ff8', '49Makenna.Feeney11@hotmail.com', 'Eva Brown', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('204ef1e8-ec94-4442-aadf-ae95abb82f16', '55Selena_Hessel@hotmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=57', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8eb10f71-390e-4e91-b41e-f2dd511ffa17', 'Shipping Update', 'Your order has been cancelled as per your request.', 'Customer Service', '64Gerson37@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('c0a2a809-5ffe-44be-bd6b-d94da419517d', 'Shipping Update', 'Your order has been cancelled as per your request.', 'Order Processing', '71Horace.Grady@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('cea46d53-2c38-4861-84d2-5b8f812d4f45', 'Shipping Update', 'Your order will be delivered on the scheduled date. Please be ready.', 'John Doe', '78Gus.Rodriguez@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '355bcef2-d63b-4ec4-97da-a69b5922e641');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1b823a94-7bf3-4093-9228-938789cc0fd0', 'Delivery Scheduled', 'Your order has been shipped and is on its way.', 'Jane Smith', '85Arnaldo_Zemlak5@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '99c7c50f-bf1c-4009-81e1-3d95731b17b1');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a0490111-3050-4cbb-9874-a6fceb901f28', 'Payment Received', 'Your order has been cancelled as per your request.', 'Customer Service', '92Derek_Pfannerstill50@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '99c7c50f-bf1c-4009-81e1-3d95731b17b1');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('643f78cb-a1f4-4a07-a1ca-5b375e3bc582', 'Order Confirmation', 'Your order will be delivered on the scheduled date. Please be ready.', 'Jane Smith', '99Warren.Heidenreich@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '204ef1e8-ec94-4442-aadf-ae95abb82f16');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('67dc4f35-0f22-4d4c-b22a-d870de5e81aa', 'Order Cancellation', 'Your order has been cancelled as per your request.', 'John Doe', '106Shannon.Klein@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '204ef1e8-ec94-4442-aadf-ae95abb82f16');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('9d37fc32-4c6c-4969-886d-b4ecb792fc9d', 'Delivery Scheduled', 'We have received your payment. Thank you', 'Order Processing', '113Elwin.Quitzon81@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', 'c6aa2fb7-5b20-413f-b48d-03af48ea0ff8');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('c9ec4418-be41-4839-b8af-086789128454', 'Shipping Update', 'We have received your payment. Thank you', 'Jane Smith', '120Elise_Parisian65@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', 'b2cd54a1-8f3a-48a7-a4ad-daf1fd36b8cf');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a14d2cb0-e5ad-436a-8891-36a01372307d', 'Delivery Scheduled', 'We have received your payment. Thank you', 'Order Processing', '127Shaun54@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "customer" ("id", "name", "email", "phone") VALUES ('b8afd73c-9da4-445b-a11b-948830e3ed34', 'Alex Johnson', '132Kade23@gmail.com', '3344556677');
INSERT INTO "customer" ("id", "name", "email", "phone") VALUES ('bd8ba130-4db3-47ad-8eee-22c6a303687c', 'John Doe', '136Darrell.Rempel11@yahoo.com', '1122334455');
INSERT INTO "customer" ("id", "name", "email", "phone") VALUES ('5d9d896c-1ef5-45e4-9827-fdf6b0ea834a', 'Maria Garcia', '140Kristina_Williamson@gmail.com', '1122334455');
INSERT INTO "customer" ("id", "name", "email", "phone") VALUES ('b91710fc-51d5-4905-b036-bd86347986a7', 'Alex Johnson', '144Marilie_Effertz@gmail.com', '3344556677');
INSERT INTO "customer" ("id", "name", "email", "phone") VALUES ('d27b5351-70f4-457e-8640-e1a1a26c0617', 'Alex Johnson', '148Eulalia_Brekke89@yahoo.com', '0987654321');
INSERT INTO "customer" ("id", "name", "email", "phone") VALUES ('f6be33ba-6d10-457c-b943-ba23646691db', 'John Doe', '152Mauricio_Rodriguez@gmail.com', '3344556677');
INSERT INTO "customer" ("id", "name", "email", "phone") VALUES ('d0692fb3-a3da-45cd-96b8-d060c83567ec', 'Maria Garcia', '156Citlalli.Emard@gmail.com', '1122334455');
INSERT INTO "customer" ("id", "name", "email", "phone") VALUES ('47e88a57-677e-444e-a04e-dab025d43cee', 'Alex Johnson', '160Jade_Barrows@hotmail.com', '1122334455');
INSERT INTO "customer" ("id", "name", "email", "phone") VALUES ('713d2d54-eda7-4897-8c84-fac30e24bb7c', 'Maria Garcia', '164Adrienne.Hand-Gulgowski@hotmail.com', '0987654321');
INSERT INTO "customer" ("id", "name", "email", "phone") VALUES ('1aa47387-50f8-4bd8-958c-6c3a8b249c75', 'Maria Garcia', '168Elmo10@gmail.com', '3344556677');

INSERT INTO "product" ("id", "name", "description", "price") VALUES ('e6b86574-96ba-4e99-83c7-8849768893f8', 'Wireless Headphones', '100 organic cotton unisex tshirt available in various colors', 297);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('94c26999-0995-42df-9546-1250c26d6d68', 'Eco Water Bottle', 'Noisecancelling overear headphones with 20 hours of playback', 183);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('8077846b-171b-41c4-8bf1-97eca9e8fa97', 'Smartwatch Fitness Pro', 'Waterresistant smartwatch with fitness tracking features', 843);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('31296df3-aa67-4382-8877-de177338052f', 'Wireless Headphones', 'Waterresistant smartwatch with fitness tracking features', 763);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('bae781f0-7f9a-4be5-964f-8c2d9e55d865', 'Organic Cotton TShirt', 'Highperformance laptop with retina display', 574);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('da3bbd32-a2cd-4ab4-ae94-18d5f173f21d', 'Organic Cotton TShirt', 'Waterresistant smartwatch with fitness tracking features', 3);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('90e5b128-efbf-477a-8ee7-f4f4402f3731', 'Organic Cotton TShirt', 'Highperformance laptop with retina display', 565);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('cfa7841e-d12a-4082-869d-526ac65d78b1', 'Smartwatch Fitness Pro', 'Noisecancelling overear headphones with 20 hours of playback', 963);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('b87cfdb2-c5ad-4551-9cf8-5699678f4b8f', 'Eco Water Bottle', '100 organic cotton unisex tshirt available in various colors', 157);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('1451075b-3caf-48f5-84d0-4ea2efed0772', 'Laptop Pro 15', 'Waterresistant smartwatch with fitness tracking features', 77);

INSERT INTO "order" ("id", "totalDue", "status", "date", "customerId", "userId") VALUES ('9f8c21ce-20f5-4194-b03a-15e17d5ef1b2', 1, 'Pending', '2024-07-31T16:21:28.866Z', 'bd8ba130-4db3-47ad-8eee-22c6a303687c', '9f3451ff-e56d-4019-9484-ee3cad2ce358');
INSERT INTO "order" ("id", "totalDue", "status", "date", "customerId", "userId") VALUES ('6f288160-cf59-44aa-93b6-af85f58a97fc', 604, 'Completed', '2024-06-02T18:38:20.974Z', 'b8afd73c-9da4-445b-a11b-948830e3ed34', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "order" ("id", "totalDue", "status", "date", "customerId", "userId") VALUES ('375e27c0-8fa9-4b7e-a83e-6158de824fc7', 601, 'Shipped', '2024-07-12T20:05:35.817Z', 'b8afd73c-9da4-445b-a11b-948830e3ed34', 'b2cd54a1-8f3a-48a7-a4ad-daf1fd36b8cf');
INSERT INTO "order" ("id", "totalDue", "status", "date", "customerId", "userId") VALUES ('7a2a8f6a-9243-4ebb-8fc7-68b6990925b6', 164, 'Pending', '2024-01-23T15:17:39.454Z', 'd0692fb3-a3da-45cd-96b8-d060c83567ec', '204ef1e8-ec94-4442-aadf-ae95abb82f16');
INSERT INTO "order" ("id", "totalDue", "status", "date", "customerId", "userId") VALUES ('d1fca62d-ca93-4915-ad00-5916adbbca81', 991, 'Processing', '2023-04-15T07:39:42.449Z', 'b91710fc-51d5-4905-b036-bd86347986a7', '9f3451ff-e56d-4019-9484-ee3cad2ce358');
INSERT INTO "order" ("id", "totalDue", "status", "date", "customerId", "userId") VALUES ('a023599b-58e2-485f-ab3b-6cd7e6f770d7', 818, 'Pending', '2024-10-16T20:51:26.746Z', 'd27b5351-70f4-457e-8640-e1a1a26c0617', 'b2cd54a1-8f3a-48a7-a4ad-daf1fd36b8cf');
INSERT INTO "order" ("id", "totalDue", "status", "date", "customerId", "userId") VALUES ('e5a8963e-d60a-4f71-8ddf-86a1b9b9b52a', 162, 'Processing', '2023-08-10T12:11:38.049Z', 'd0692fb3-a3da-45cd-96b8-d060c83567ec', '9f3451ff-e56d-4019-9484-ee3cad2ce358');
INSERT INTO "order" ("id", "totalDue", "status", "date", "customerId", "userId") VALUES ('548796ed-cbbf-4477-85d4-6765c9511498', 35, 'Processing', '2024-08-05T20:07:56.218Z', 'b91710fc-51d5-4905-b036-bd86347986a7', '9f3451ff-e56d-4019-9484-ee3cad2ce358');
INSERT INTO "order" ("id", "totalDue", "status", "date", "customerId", "userId") VALUES ('0566effe-171b-4ea3-b6d8-5f08044926e7', 287, 'Completed', '2024-04-18T10:26:34.110Z', 'd27b5351-70f4-457e-8640-e1a1a26c0617', '355bcef2-d63b-4ec4-97da-a69b5922e641');
INSERT INTO "order" ("id", "totalDue", "status", "date", "customerId", "userId") VALUES ('a6c4cc64-8b64-41fe-9e63-579a8f585774', 828, 'Shipped', '2024-05-29T22:40:44.143Z', 'd27b5351-70f4-457e-8640-e1a1a26c0617', '47760377-7338-472f-acc5-29a3b32f2063');

INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('b7f58f64-3752-4e9a-821d-fb18d1655934', 485, 292, '375e27c0-8fa9-4b7e-a83e-6158de824fc7', 'e6b86574-96ba-4e99-83c7-8849768893f8');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('464a36b9-cd3b-4fe1-8d23-b1bbdbf9cdeb', 546, 505, '375e27c0-8fa9-4b7e-a83e-6158de824fc7', '90e5b128-efbf-477a-8ee7-f4f4402f3731');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('378bae2c-f711-49bb-a1d2-2af198fff1e0', 646, 245, 'd1fca62d-ca93-4915-ad00-5916adbbca81', '1451075b-3caf-48f5-84d0-4ea2efed0772');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('c64d0058-a2bc-4d2d-91ee-000ac84c5b3a', 760, 505, '0566effe-171b-4ea3-b6d8-5f08044926e7', '90e5b128-efbf-477a-8ee7-f4f4402f3731');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('0362e1b3-b83d-44c5-98ab-aaba88a2deeb', 399, 116, 'd1fca62d-ca93-4915-ad00-5916adbbca81', 'da3bbd32-a2cd-4ab4-ae94-18d5f173f21d');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('2378c0d8-c26c-4d5d-9935-9a12f9df49da', 237, 129, 'e5a8963e-d60a-4f71-8ddf-86a1b9b9b52a', 'e6b86574-96ba-4e99-83c7-8849768893f8');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('2722bcb5-bbed-4b88-98bf-44a32153647d', 951, 510, 'd1fca62d-ca93-4915-ad00-5916adbbca81', 'cfa7841e-d12a-4082-869d-526ac65d78b1');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('5104f106-fb7f-4114-b678-65284885c51b', 660, 702, 'a6c4cc64-8b64-41fe-9e63-579a8f585774', '8077846b-171b-41c4-8bf1-97eca9e8fa97');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('aec13eda-b830-48e9-9942-5a6ea955b953', 137, 713, 'e5a8963e-d60a-4f71-8ddf-86a1b9b9b52a', '8077846b-171b-41c4-8bf1-97eca9e8fa97');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "productId") VALUES ('3db24922-8fc1-4936-abc5-12ad6a3116e2', 713, 367, '548796ed-cbbf-4477-85d4-6765c9511498', 'b87cfdb2-c5ad-4551-9cf8-5699678f4b8f');
    `,
      )
    } catch (error) {
      // ignore
    }

}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
