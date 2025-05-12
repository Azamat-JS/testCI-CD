export declare class OrderDto {
    readonly id: string;
    email: string;
    items: {
        productId: string;
        quantity: number;
    }[];
}
