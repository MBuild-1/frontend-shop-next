// eslint-disable-next-line import/extensions
import { ThemeToggleButton } from '@/components/atoms';

export default function Home() {
  return (
    <>
      <ThemeToggleButton />
      <h1 className="text-red-500 text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  );
}
