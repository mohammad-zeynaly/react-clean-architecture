// Bad way
// export const useLocalStorageMange = <T>() => {
//   const setLocalStorage = (title: string, data: T) => {
//     return localStorage.setItem(title, JSON.stringify(data));
//   };

//   const getLocalStorage = (title: string) => {
//     return JSON.parse(localStorage.getItem(title)!);
//   };

//   return { setLocalStorage, getLocalStorage };
// };

// correct way
export const localStorageMange = {
  setLocalStorage: <T>(title: string, data: T) => {
    return localStorage.setItem(title, JSON.stringify(data));
  },
  getLocalStorage: (title: string) => {
    return JSON.parse(localStorage.getItem(title)!);
  },
};
