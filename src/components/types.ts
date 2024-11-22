export interface Activity {
  title: string;
  description: string;
  imageUrl: string;
  distance: string;
  location?: {
    lat: number;
    lng: number;
  };
}