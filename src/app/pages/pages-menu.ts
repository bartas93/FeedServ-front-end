import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_MANAGER: NbMenuItem[] = [
  {
    title: 'Panel główny',
    icon: 'nb-home',
    link: '/strony/panel-glowny',
    home: true,
  },
  {
    title: 'Nowe zamówienie',
    icon: 'nb-plus',
    link: '/strony/nowe-zamowienie',
  },
  {
    title: 'Kasa fiskalna',
    icon: 'nb-locked',
    link: '/strony/kasa-fiskalna',
  },
  {
    title: 'Historia zamówień',
    icon: 'nb-list',
    link: '/strony/historia-zamowien',
  },
  {
    title: 'Klienci',
    icon: 'nb-person',
    link: '/strony/klienci',
  },
  {
    title: 'Magazyn',
    icon: 'nb-layout-two-column',
    link: '/strony/magazyn',
  },
  {
    title: 'Pracownicy',
    icon: 'nb-star',
    link: '/strony/pracownicy',
  },
  {
    title: 'Raporty sprzedaży',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Podsumowanie dnia',
        link: '/strony/raporty/podsumowanie-dnia',
      }, {
        title: 'Zyski',
        link: '/strony/raporty/zyski',
      }, {
        title: 'Koszty',
        link: '/strony/raporty/koszty',
      },
    ],
  },
  {
    title: 'Konfiguracja',
    icon: 'nb-gear',
    children: [
      {
        title: 'Restauracja',
        link: '/strony/konfiguracja/restauracja',
      },
      {
        title: 'Słownik produktów',
        link: '/strony/konfiguracja/slownik-produktow',
      },
      {
        title: 'Menu restauracji',
        link: '/strony/konfiguracja/menu-restauracji',
      },
    ],
  },
];

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Panel główny',
    icon: 'nb-home',
    link: '/strony/panel-glowny',
    home: true,
  },
  {
    title: 'Nowe zamówienie',
    icon: 'nb-plus',
    link: '/strony/nowe-zamowienie',
  },
  {
    title: 'Kasa fiskalna',
    icon: 'nb-locked',
    link: '/strony/kasa-fiskalna',
  },
  {
    title: 'Historia zamówień',
    icon: 'nb-list',
    link: '/strony/historia-zamowien',
  },
  {
    title: 'Klienci',
    icon: 'nb-person',
    link: '/strony/klienci',
  },
];
