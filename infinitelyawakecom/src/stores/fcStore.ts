import { defineStore } from "pinia";

type Static = {
  darkest: any;
  blake: any;
  ras: any;
  lyris: any;
  kyras: any;
  theo: any;
  jo: any;
  trey: any;
};

enum StaticMembers {
  darkest = "darkest",
  blake = "blake",
  ras = "ras",
  lyris = "lyris",
  kyras = "kyras",
  theo = "theo",
  jo = "jo",
  trey = "trey"
}

export const fcStore = defineStore("fc", {
  state: (): { static: Static } => {
    return {
      static: {
        blake: undefined,
        darkest: undefined,
        jo: undefined,
        kyras: undefined,
        lyris: undefined,
        ras: undefined,
        theo: undefined,
        trey: undefined
      }
    };
  },

  actions: {
    setMemberData(member: StaticMembers, data: JSON | null) {
      this.static[`${member}`] = data;
    },

    getMemberData(member: StaticMembers) {}
  }
});

// TODO: Make API to get all the member's data
// 4866cca8d6b1d994fcc1e69db54e3062
// function getDataFromAPI
