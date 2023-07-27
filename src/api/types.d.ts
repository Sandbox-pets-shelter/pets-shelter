export namespace API {
  export namespace Public {
    export namespace Forms {
      export namespace PetsBoarding {
        export type Request = {
          firstName: string;
          lastName: string;
          age: number;
          email: string;
          phoneNumber: string;
          amountCats: number;
          amountDogs: number;
          petInHome: boolean;
          healthCare: boolean;
          buyPetFood: boolean;
          buyEssentials: boolean;
          subscribeToNewsletter: boolean;
          personalDataAgreement: boolean;
        };

        export type Response = {
          id: number;
          firstName: string;
          lastName: string;
          age: number;
          email: string;
          phoneNumber: string;
          createDate: number;
          amountCats: number;
          amountDogs: number;
          petInHome: boolean;
          healthCare: boolean;
          buyPetFood: boolean;
          buyEssentials: boolean;
          subscribeToNewsletter: boolean;
          personalDataAgreement: boolean;
        };
      }
      export namespace HomelessAnimals {
        export type Request = {
          firstName: string;
          email: string;
          phoneNumber: string;
          description: string;
          subscribeToNewsletter: boolean;
          personalDataAgreement: boolean;
        };
        export type Response = {
          id: number;
          firstName: string;
          email: string;
          phoneNumber: string;
          description: string;
          subscribeToNewsletter: boolean;
          personalDataAgreement: boolean;
        };
      }
    }
  }
}
