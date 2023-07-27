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
      export namespace PetOwnerProfiles {
        export type Request = {
          firstName: string;
          lastName: string;
          age: number;
          email: string;
          phoneNumber: string;
          petDomestic: boolean;
          category: string;
          allergy: boolean;
          children: boolean;
          questionnaires: string;
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
          petDomestic: boolean;
          category: string;
          allergy: boolean;
          children: boolean;
          questionnaires: string;
          subscribeToNewsletter: boolean;
          personalDataAgreement: boolean;
        };
      }
      export namespace CollaborationProposals {
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
      export namespace PetShelters {
        export type Request = {
          firstName: string;
          lastName: string;
          email: string;
          phoneNumber: string;
          amountCats: number;
          amountDogs: number;
          petDomestic: boolean;
          readyToBringPet: boolean;
          subscribeToNewsletter: boolean;
          personalDataAgreement: boolean;
        };
        export type Response = {
          id: number;
          firstName: string;
          lastName: string;
          email: string;
          phoneNumber: string;
          createDate: number;
          amountCats: number;
          amountDogs: number;
          petDomestic: boolean;
          readyToBringPet: boolean;
          subscribeToNewsletter: boolean;
          personalDataAgreement: boolean;
        };
      }
      export namespace PetRequests {
        export type Request = {
          firstName: string;
          lastName: string;
          age: number;
          email: string;
          phoneNumber: string;
          city: {
            id: number;
            name: string;
          };
          category: string;
          gender: string;
          woolColor: string;
          woolLength: string;
          healthStatus: string;
          allergy: boolean;
          questionnaires: {
            answer: string;
            type: string;
          };
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
          city: {
            id: 0;
            name: string;
            region: {
              id: 0;
              name: string;
              country: {
                id: 0;
                name: string;
              };
            };
          };
          category: string;
          gender: string;
          woolColor: string;
          woolLength: string;
          healthStatus: string;
          allergy: boolean;
          questionnaires: {
            id: number;
            answer: string;
            photos: {
              id: number;
              link: string;
            };
            type: string;
          };
          subscribeToNewsletter: boolean;
          personalDataAgreement: boolean;
        };
      }
    }
  }
}
