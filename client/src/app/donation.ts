import { Address } from "cluster";

export interface Donation {
    receiverAddress: Address;
    receiverName: string;
    donationName: string;
    totalDonations: number;
    minimumDonation: number;
}