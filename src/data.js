import {
    Leaderboard,
    Background,
    Prize,
    Sword,
    Tournament,
    Logout,
    Glasses,
} from './assets'


export const menu = [
    {
        id: 1,
        title: "Dashboard",
        icon: Background,
    },
    {
        id: 2,
        title: "Play",
        icon: Sword,
    },
    {
        id: 3,
        title: "Tournament",
        icon: Tournament,
    },
    {
        id: 4,
        title: "Upcoming contest",
        icon: Prize,
    },
    {
        id: 5,
        title: "Watch",
        icon: Glasses,
    },
    {
        id: 6,
        title: "Leaderboard",
        icon: Leaderboard,
    }


];
export const logoutMenu = {
    title: "Logout",
    icon: Logout,
};