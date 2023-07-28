export namespace API {
  export namespace Public {
    export namespace Forms {
      export namespace PetsBoarding {
        export interface Request {
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
        }

        export interface Response extends Request {
          id: number;
          createDate: number;
        }
      }
      export namespace HomelessAnimals {
        export interface Request {
          firstName: string;
          email: string;
          phoneNumber: string;
          description: string;
          subscribeToNewsletter: boolean;
          personalDataAgreement: boolean;
        }
        export interface Response extends Request {
          id: number;
        }
      }
      export namespace PetOwnerProfiles {
        export interface Request {
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
        }
        export interface Response extends Request {
          id: number;
          createDate: number;
        }
      }
      export namespace CollaborationProposals {
        export interface Request {
          firstName: string;
          email: string;
          phoneNumber: string;
          description: string;
          subscribeToNewsletter: boolean;
          personalDataAgreement: boolean;
        }
        export interface Response extends Request {
          id: number;
        }
      }
      export namespace PetShelters {
        export interface Request {
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
        }
        export interface Response extends Request {
          id: number;
          createDate: number;
        }
      }
      export namespace PetRequests {
        export interface Request {
          firstName: string;
          lastName: string;
          age: number;
          email: string;
          phoneNumber: string;
          city: string;
          category: string;
          gender: string;
          woolColor: string;
          woolLength: string;
          healthStatus: string;
          allergy: boolean;
          questionnaires: string;
          subscribeToNewsletter: boolean;
          personalDataAgreement: boolean;
        }
        export interface Response extends Request {
          id: number;
        }
      }
    }
  }
}
