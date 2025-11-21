import { Categories, Container, Sort } from ".";
export const Filters: React.FC = () => {
  return (
    <Container>
      <div className="mt-20">
        <div className="flex flex-col gap-4  md:flex-row justify-between">
          <Categories />
          <Sort />
        </div>
      </div>
    </Container>
  );
};
