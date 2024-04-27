class Alloys {
  getAlloys(): Alloy[] {
    return [
      {
        name: 'Tin alloy',
        components: [
          {
            name: 'Iron',
            minValue: 45,
            maxValue: 55
          },
          {
            name: 'Tin',
            minValue: 45,
            maxValue: 55
          },
        ]
      },
      {
        name: 'Weak blue steel',
        components: [
          {
            name: 'Bismuth bronze',
            minValue: 10,
            maxValue: 15
          },
          {
            name: 'Steel',
            minValue: 20,
            maxValue: 25
          },
          {
            name: 'Black steel',
            minValue: 50,
            maxValue: 55
          },
          {
            name: 'Sterling silver',
            minValue: 10,
            maxValue: 15
          },
        ]
      },
      {
        name: 'Rose gold',
        components: [
          {
            name: 'Copper',
            minValue: 15,
            maxValue: 30
          },
          {
            name: 'Gold',
            minValue: 70,
            maxValue: 85
          },
        ]
      },
      {
        name: 'Sterling silver',
        components: [
          {
            name: 'Silver',
            minValue: 60,
            maxValue: 80
          },
          {
            name: 'Copper',
            minValue: 20,
            maxValue: 40
          },
        ]
      },
      {
        name: 'Red alloy',
        components: [
          {
            name: 'Redstone',
            minValue: 15,
            maxValue: 25
          },
          {
            name: 'Copper',
            minValue: 75,
            maxValue: 85
          },
        ]
      },
      {
        name: 'Brass',
        components: [
          {
            name: 'Zinc',
            minValue: 8,
            maxValue: 12
          },
          {
            name: 'Copper',
            minValue: 88,
            maxValue: 92
          },
        ]
      },
      {
        name: 'Red steel',
        components: [
          {
            name: 'Steel',
            minValue: 20,
            maxValue: 25
          },
          {
            name: 'Brass',
            minValue: 10,
            maxValue: 15
          },
          {
            name: 'Black steel',
            minValue: 50,
            maxValue: 55
          },
          {
            name: 'Rose gold',
            minValue: 10,
            maxValue: 15
          },
        ]
      },
      {
        name: 'Bronze',
        components: [
          {
            name: 'Copper',
            minValue: 88,
            maxValue: 90
          },
          {
            name: 'Tin',
            minValue: 8,
            maxValue: 12
          },
        ]
      },
      {
        name: 'Black bronze',
        components: [
          {
            name: 'Silver',
            minValue: 10,
            maxValue: 25
          },
          {
            name: 'Copper',
            minValue: 50,
            maxValue: 70
          },
          {
            name: 'Gold',
            minValue: 10,
            maxValue: 25
          },
        ]
      },
      {
        name: 'Stainless steel',
        components: [
          {
            name: 'Steel',
            minValue: 60,
            maxValue: 80
          },
          {
            name: 'Chrome',
            minValue: 20,
            maxValue: 30
          },
          {
            name: 'Nickel',
            minValue: 10,
            maxValue: 20
          },
        ]
      },
      {
        name: 'Weak steel',
        components: [
          {
            name: 'Black bronze',
            minValue: 15,
            maxValue: 25
          },
          {
            name: 'Steel',
            minValue: 50,
            maxValue: 70
          },
          {
            name: 'Nickel',
            minValue: 15,
            maxValue: 25
          },
        ]
      },
      {
        name: 'Bismuth bronze',
        components: [
          {
            name: 'Zinc',
            minValue: 20,
            maxValue: 30
          },
          {
            name: 'Copper',
            minValue: 50,
            maxValue: 65
          },
          {
            name: 'Bismuth',
            minValue: 10,
            maxValue: 20
          },
        ]
      },
    ]
  }

  getAlloyByName(name: string): Alloy | null {
    return this.getAlloys().find((item) => item.name === name) || null
  }
}
