import { PetCard } from '../components/PetCard';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Home</h1>
        <p>Feed, play, or rest your pet here.</p>
      </div>
      <PetCard />
    </div>
  );
}
