import { Container, Title } from ".";

export const SpecialOffers: React.FC = () => {
  return (
    <Container>
      <div className="mt-20 pb-20">
        <Title
          className="mb-10 text-[#414141] text-4xl font-bold text-center md:text-left"
          size="md"
          text="Special offers"
        />

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:justify-center">
          <img
            src="/images/offers/offer1.svg"
            alt="offer1"
            className="w-full max-w-sm md:max-w-none"
          />
          <img
            src="/images/offers/offer2.svg"
            alt="offer2"
            className="w-full max-w-sm md:max-w-none"
          />
        </div>
      </div>
    </Container>
  );
};
