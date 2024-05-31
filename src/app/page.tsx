"use client";
import {
  Button,
  SegmentItem,
  SegmentContainer,
  Text,
  InputField,
  CustomRadioButton,
} from "@/lib/ui";

import { useState } from "react";
import Logo from "./components/logo";
import Icon from "@squaress/ui/icons";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import { CustomRadioButton } from "./components/radio-group";

const radioOptions = [
  {
    id: "liquid-stake",
    value: "liquid-stake",
    label: (
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-[2px]">
          <Text className="l1-heavy">Liquid Stake</Text>
          <Text className="l2-light">Unlock stake liquidity for DeFi</Text>
        </div>
        <div className="flex flex-col gap-[2px]">
          <Text className="b4-light">APY</Text>
          <Text className="l1-heavy">-</Text>
        </div>
      </div>
    ),
  },
  {
    id: "native-stake",
    value: "native-stake",
    label: (
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-[2px]">
          <Text className="l1-heavy">Native Stake</Text>
          <Text className="l2-light">Stake natively with ice validator</Text>
        </div>
        <div className="flex flex-col gap-[2px]">
          <Text className="b4-light">APY</Text>
          <Text className="l1-heavy">7.46%</Text>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  const [stakeState, setStakeState] = useState("stake");
  const [value, setValue] = useState("liquid-stake");
  const [expandSetting, setExpandSetting] = useState(false);

  console.log("vale", value);
  //imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/66c41648-d23e-4bee-45df-5ec4ecce5200/public

  return (
    <div className=" w-full min-h-screen flex items-center justify-center">
      <div className="min-h-screen w-full ">
        <header
          className="bg-cover bg-center text-white w-full h-full min-h-screen"
          style={{ backgroundImage: "url(/background.png)" }}
        >
          <div className="max-w-7xl mx-auto py-4">
            <Navbar />
          </div>
          <div className="py-24 min-h-screen flex flex-col items-center ">
            <div className=" mx-auto max-w-3xl text-center flex flex-col gap-3">
              <Text className="text-7xl font-bold text-black leading-snug">
                Fund public goods by Staking your $SOL
              </Text>
              <Text className="mt-4 text-black text-2xl">
                iceSOL is an initiative by Cubik which funds public goods
                through grants using yield generated
              </Text>
              <div className="mt-8  w-full flex items-center justify-center">
                <div className="bg-white p-3 w-fit rounded-full flex">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xlinkHref="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="36"
                      height="36"
                      rx="18"
                      fill="url(#pattern0_146_1883)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_146_1883"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_146_1883"
                          transform="scale(0.00446429)"
                        />
                      </pattern>
                      <image
                        id="image0_146_1883"
                        width="224"
                        height="224"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAIAAACVT/22AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA4KADAAQAAAABAAAA4AAAAACiWSQ0AABAAElEQVR4Ae29WbBtx3nft+Y9nfHOA4CLezGSBAGOAsFB1EDJAwdZoizRqXLsSiJV9JCHJH5y5cHlykucxJVKHlK2JA+iXR5kWlJREi0OoihRJDhJoEAQJAASM3BxpzPvaU35/b9ee999z10bAUBcnHOqVt9z1+7V/fXX3V//19dzt+c1ppFAI4FGAo0EGgk0Emgk0EigkUAjgUYCjQQaCTQSaCTQSKCRQCOBRgKNBBoJNBJoJNBIoJFAI4FGAo0EGgk0Emgk0EigkUAjgUYCjQQaCTQSaCTQSKCRQCOBRgKNBBoJNBJoJNBIoJFAI4FGAo0EGgk0Emgk0EigkUAjgUYCjQQaCTQSaCTQSKCRQCOBRgKNBBoJNBJoJNBIoJFAI4FGAo0EGgk0Emgk0EigkUAjgUYCjQQaCTQSaCTQSKCRQCOBRgKNBBoJNBJoJNBIoJFAI4FGAo0EGgk0Emgk0EigkUAjgUYCjQQaCTQSaCTQSKCRQCOBRgKNBBoJNBJoJNBIoJFAI4FGAo0EXosE/NcSaH+FCSLP46/wvDEJI0Nl0fL8URAqmeVMWmftjtJ5Ohn4MJgYR+mes+4T/5f7LYM5vjP851C8Iud57Hfl7hXxqiPyoyhpZ8O+1068fOglLW971Pa8YR3tG+BGyR5wEwJC/pd5kYFTPwzLMW9lUOSuKH1fAAxArgExKPWj0iyFaWfhrdCbjCiFc98FL+YUvDGzANc+5pBfS/QjvJW5fXjXcfC9/Do3OcxLZy0xjplXxOMUuWSDIXL1cmXodfq25sX5cu4HH6A+EPLTPJcQS68M8jj24twbB+VErPjPiAA1O/uK3b1OkJUbaD1/8j75nWFh1gn33e6vVuPuDv//8x4INTXGPrca92k+avzqnHqeH+XUAtRCYQo6U753Lw0DzwRcF+LGus2W1Y2N6UZxD7y4QO3pK0+d0iu9qJQ+uQotc0eToj3DTC8OXVcJPIpdblPU4WWad4bJtRkIZwPPeF37NVz1KCuNfNVlYpvGOXFwv8GcCPJ6nYLKuzZ89fZqC9iJkI8g1p+fesEOsmxH3rCef22kr6NjfW5fxwhuNKtW4bWFzyD1gzRBqpRUmQVJlFqV5/tWpaNZpUpUWoYsAhTTonOWMsXTNzIFMYsCzMFPPqdKnf0ursn7PID6cwo+nBPxHHIvcNC6Jk5eymIOn92E1Xu+7HvjMh954763WJa05vvK0lRYc4LdMOcDD1AygFqkCT8s4/D4mVNvvWf12KkkTMYroQOlgBj4ualP2qM++DVpU24Vdu01ClIQjMtV+kAe5dwqu77NV86RaBbW03tzAFrMoY/mAL2YA+gcJfhqTLsM1l642P/e8/kffmu05XW9iLoly+ck/tVwfm20c8T52pjtRaix5w+9Mvdbwdlz5376Q7fc/77Fkze32r0X2hskR7gMfDBHj6m0Ottvqa8/RafTo0AziAygKE6IgWkojYuvH9WrrCKsd/fb9ZosCxVvjZkDoJJ2dK0J6t0zmjV1JpxT9dfRyu1Y2T10aSv99tOPPH9+/LXny9SNSqjKmRfkhrofeIBau9P3lpfu/dDP3P2xn9tcPfJUP6XfdGzNNOgEbU6DquJOpUFpYzn16aSO3Y9DnvwVKE4pXeld/Sb1gEhjU7zXFY4GE+pMHo3qnNH/9RqOUYla+tQf1LrncwCqFvqrMd+OxqeOrhx721nvpiPeN54feiN1y6LYS+vz9Wp4vxbaAwPQduiN6GD7kZe0vXTkF2nX8xLP2yp67bvuOfvxXzj8wAcuLaymlweHR6NeEG611Pykb4tioaOPGhX+GIYaWe8DhQoQgzIP6GEJalkmFUsIqtAwKMPSGm8Esy+Aih7g8iyDUiAG4oZbmgwEKdDRsggKfinNa0VBbM6iZ1g4UZuL3CuFlwdkwuxyNF97RjntaSXdWF2l98NeLX1RNROviRSG+XRY6mqk4nk+iU94UXdrNIy8zU687Q2X++lt4dLFKxeSY8fXssteEqF8V71oizoqrf+KLG039lFfH93YOF8Td9CZtFoapxtvB0ERRzHtzi3PWzj35jf/+E+efdO9fhn1L2+GeZkkybBklEmjoVKDRGcWfjUkxVMw8rFjfNdQlYuwJXdDi2CIESD1K41qTs4dx8CqPovCEcw+J1KtBu0nr45PRWj8d9sd5Qx9xQG6V0YP4dUgvMBqhlsVnX6O50Fc+KNWkHrFQlGeLFtRmDyV7ywfO7f1zA83/+2XvK/9wM+9y76/CQMnjZngb5i1PvVvWPSvPCJ0ZxAE1GOt0luKvXGe5kEvO3TLnR/7hZse+ODSiTMe4y87OQCFbCy9FghDhjDegJTDIt0l6zEZUk2xSh8KrEATJSlcSyFKEykU6sxUmyG1chE9KXcYhQDLBOtwcFiXvrUvwbk4oEykXWFImJvQu9gniRSB+3MScgGvxWjFxHlNiac0zn0muOidr4hXhoWfZ3kS+XHkbw6S7TRptYfd7ooX7nzmL7JP/tny99dpCG238yxixKK+neO439Bn/ajvDY3yNTJvd7NRn2qvw5hxyehxyzt087s++stHP/izaW+pn6ERo54akgwXZVSnzBgxJ0RzEihZ74jCQQ8wGGOVPlYrLOAkd2kIVXz26hJIQBEJrehL4yN/o8fHOFPmxAMhrvZDUEXGnyjFSA97ZQRLNvNWfBavAEkRGEHl6QISgUOYwrtMOJ7X0CtIRa8Wy5TPVXdigk9FY/GLHwantKQiSqIg2u73Ge9stxdbXnvtX39u+5N/HH3jmW7pbUKXqJUU5XykhNgDc3AA2urQ9KQdh47bKQLvyJm3fviX7vupD28vHdke5+Os6IVJFw2bp2mZ+a0oQFMadoQhSkYFbY1Q2XExUMrRCs8ooUeD8jBQUPRYhAD+QeYACAvQKIC6yVNRiwI2suE1QZ4ROSCKCwH0VCLc03kRNhSlCBSN+drrLHCVdkunUhNO7A4xhJCXARH7JEeyyUuZcHZ8XGZF419pl7EX9MogLYpBN2l1lsJLWxtfeXj7H/yW992X8swbUk9I3ACZEftyr1TowQEoY8eCQDgqEy85dN9Hfum+n/5Iv7W0PUjjOOm226plxzQ9yzIK6NBQL6mAVHqm56x4nCJ0bU3hTvCCRvCyQgZlquXN2ZWv0ISn4yNeKm8BUnP1ctYbxmEUf6e2K8yJh6GNZAhwCqaE8NQvr+LDi8iMNc72ykNfgNFPQilW6KymthQouIwCqQJ39oqzfuRuvhNWuBg3v9wJg24Q+KNsVHrteHEl97Z//5tr//S3Vx+6mFGltyMNrGqVQxSZ8nSdNeP5hj4ODECd2AtGjhdP3/HBD7/5x/+ad/jkpcFoYYS6DFFDWToq0jHDlz7LmzS8aXI1PUclLVxRSgKToFAVmGxoRN6owqA3NAoBuIlI2tI4CMCEEwjkRlOh6nsYK8Ol6nrjO2FeQUFBVKRTIOo7s6SIzyxwXUJEK6OZoVlW5jtLfw1G+TKM/ppITWZEIuNYOSZ69vwiy/IB3zKLl9aHgz/8i8u/8dniS09GfN9xK2i18tEYkUQBM/K5VOkeIVQiPxCmRw8e48e3vf09H/zw3146cfbC2lbU7hwOkqA/3F6/PE77fkSD0SuznPpdtPy5wSAwpT6TcbD+jZSkeuLMBFr5sfrJPNXzwc910ulgCY9qhE36QwKhQkE/DUEs1kmqGPADUGUmLK9aXt5xSu+CG4+K1WzAif1qAmboLdDMA68p20lA8z6yVaSD4Ra1UdgpHn/xhX/5mfQL37+jiLYTr1/k0daom6tLmmap1jLGs0xm2N9468vk7cZHXhcDraHxeBC2opyRSeBVejGQYII9jL3usXMf+Fvv+Nlfjo+c2hgOyzBrJ+U4c1kQiKQBbSSJEDlNOz57dcgBlWHNoittANOImS4CS9VcdeDArQIFtLBCJ+nJlKM4wIpJfBs9VRDIqPkERQ36qwtB08C+AMoUd6eop7ErJQ5qNiLgEqKnX+RS2KZUpaOUWhs1MJLq8yGoC60YQ0aCFcApNJ7us/NGEWmqPsEZX4+1CrTcqbIVapi24ySI4h0vPTuKHhpfCRd7b34q/+YD/93SeQTd3UzG3s7eDMgreXVmz76MusTIbTwaRPTFDZ0Is9XSTIgEv3Ti3Lvf/+Z33E8FtLM9SKK4HUfDwUDYc+VirTMIVVA2ToR9queqAsVX2nTiTrlb1ahQpmINiVWRm6MopUQnAZ2dGKEXH+ISjI3tzNiTIyNUnZmROVrQAbeODq5V1gR/KK4NWAUhchkI+BD1lF307tnPs1arzUKDYmvY9eJW5qebO/726KF8/c7Fmw5/9dlv/sP/x9someYapCMvMxw7jvvjOZPn/ZEg5NttJaV9xnQfUsbqmFIPk1ve/tP3ve/Dp2+7hwH7cZaHjHZSZqkQBkakKHm1uljoIS9ysXIyFKrANKJp9KCOIIKpRjQhczgjiEMe7kbP0JUsYFSljtrUkKcreI1WiYeLWg0L8RHN9KvYPT5qTCroGJjg6WReYZRUWHEoRw5heENSoZOUGMGETGGNfsJGDtirqt95MSdmWRjnYVqg9MfD0Wg47IbJQvfI9rcevfC/f8r7Tw918xCAMpXWGznFbJz2x2PfdZKY4i6LjMXGYeQxYsTaTs/v3Hz3297+kV9dPXU7WxAGWRknLb/MitG4FYRFQF3OP/Ch6lF9GfoXPOTGK46UEH44UsJ6EfhcqU+pmALln+ENJqbVROSsFDWBAINCyS6kyNcxlH7HWR6m6pWGmvFR0ViaHHEVijBM+Su5zlsWvVoEcpRXlTN8eLUmwdUYxU0JoP4wJsYKKgvIM4lbxTBl0gihDf2yX+Zxq93qdIKvP/H0//bJ/NMPH0q9xc7SFurTL2nyAFNFvm/M/lPpQZCm+o7jKJLy7By//d4H3vbuD/ROvYURu43tbUqtFfjpiOb7uLO4mBXqBwV+QIOPmt0NKqrMKE4VZkELUbW3mprCIAVqao5XFB76s2CwpSpiCFiYx6w7erIAz/haZ1o/foAH60kIbLopKOAodkIHUM2FPsBCu5b4YIiKJ0lSulLQ/BrqFFhRVwAgdmzS0ApqX8bESxQ0dlGfonEWC+gIjIninnAj0sqOi3i6V5bP7fSHSbdbtOPtbLDYXWmXxQuPPN7/+//Ue/oyLdTcCy9ubxB/Z2FhsLWtsPvJ7DsNyiwR8uF/ytJ3f+nWe3/yXR/8pWNn331ppOU6AAhwskCRstOijmlJgyErPQOmsCKAokWkUFTuWpkkLMkIR84V3GGzBiMwMgrAAjwrGqeHNNQkxAM0Q6cpK2twGmux4r9iQncqIZNISYLUtf0jrMWldDhipzgBsGJzPCbxwskBH0pTny65YqCPriJWMi0/ypeRTTgbH4uI5a95mZdRu7UTqN10NOx633n2/L/69PKnv8dK1HEQDOmoKbzHB++34r3a2qGM1Jl9B1DJXCqNYuuceev77vmxjx4+c//AO9JPBwCkneDFPPwwjKI47oyG1PDKlmmVquxVN4NyqzmtSClRQ45VgrJPceDwJHhQ7gKJAxkYcEDT4CVwFRLkrUSJRHBAN5rNXiCX1jWtJXhXGDWXyfgoM0AW0jgolFmm+FOe7c9SI0pFaNAVjYsWV1PpFnPFzfgoV5bNaRSWUh6jbBwnCcthU79ssdfgL39w+Tf+y+jff7mTdsZUOVIH5eqhQ+N0zEtE88qST8B9Yqxk90laXDKiSM1PP2wvH33P+3/mjje9uwxXd8a9pd4C33g2HGpoiEk4huNZjqNv30FO3RdThbKoW+OGNkXruvluEn5Cb90dvVg3iOJ1/Ru5iKFqZWGE4hI6JsyrPpMRCU7ScyZBMRfyrZdm3hUfl6Spy24LkDbUT9x3FUfVPcJXzJWiiSH2ylRB+CHXLu966lUfV8aK+FZryLIQP+6O/Gc/942NT37h9ovZeq8YR95i2KINsH75CsvyFnqdxPZwTjjvi99pPt/o1CSthfFoyHQw00BpzmI6lgZ7TAG3C7Zgd07e8aEPfOTXVk/fuzNioDDrtIMBC2aFl8ngpaFG8KMQ1DlXpegWd6rlR2GyqFM/NOMoLqg1eAmVGx/lFUeNU6q5KOMW/JquEnitnSqfIpFdeLDxURdK4LStGmo94g4TXFyEkQ2syh3wKxaNUwnMPAG4IiWpziL+rgSUZms7uuSIZlq5ufVUolU6Q+eOo0u4C1Use/EVdgonZdhKmFVTeyhmEX9xZrv9dDjsHF5tP3b+6f/1k8N/9yftTEO19mnDb7+bqRTe6ITmBjaaSIWtQ0BpqkTZjVl2zt353ne+92Orx+8cl60gioTgUd8PGCgHYgieX9Wbqnaxq0lGIQsE03/ma9UjUHD+shBaHRhBoqo0q364Mq+2HXgTiausFQBT9aGwSSdb9MaTENKuYig1C0fzVSyCo4JKOUJgvjhAg92SI4vr6Vex4KB0WTAFhbZSjXKUL8aeyrW4KkbRiQH2jdFOd2UpSdrlaETXh247eweSMLrgpcvdhfSRp5/8Z7+T/d5XW1spNdSoYmhc9/djKoU3OplV19akzukVWUEFThqCo6d+4u33/+277/nJqHWEdhGYZXpdn5EUkPBF0aCqqM4EZxu5VNL1qnKUkjJfAccIzNEFrAisAYA+kqP0L8oE5oKBgpivs9h3ANbg6aKWmjMCi0WfFEZpEFYYLlCqnIueSsyUXu4gifSbzrTvoIpLCFO+LHnGChfLY5VT2LosG3+LwkUkllUJBgvsaA9Hm9t+f7zSWugJqVmxMyxWe8nlncGnvuL9i8/2LvS7MCaxVSCF3+dmzzRoSDeHyFl7xFou9TXRP72V47e//6f/x1Nn35GHyzsD5MiOQnoj4247zjQnSMFRjEgXPBFIGlSaxLrV+sVdSJEFXYiLRuTRNPLDC3qBUEZBjB4muMFPyrBijm4z0JgelFXVM3GJvf0oFYpGak/8LEkudcZe7lBK5bkfguKttNo/BdE/nMXYWXnKKIy5SDpmr6jtFQflQryqkArMX7TQ6W+ycSPrdDt55O8wU0y+omjh0uilf/fHa7/5X5Yv7nCCzYBtxHyRiH7/NTct+7sfewZQhiAZaKQIKGWNd5bLx256x3se+Lk73vrxIuhubDDOWXZowRcpffYkjlGxVppCpykAlb8A5RDgAAFkcAK5KjyKX09XlpPSN5yqJ2yEBspJCJU04lFNb8jgFT60cQ0KOGIMcQTVnDgPwqPa+K0SYmHd2ikCGb2lRDgTMxgbc96mYBWSJ+mURaR8K/b5OXfznnhNFiwb8yrJimnErEZ/fHR1Nep1n9m4lAbFoaWVsJ/u/N9/cOlffLr19JWeF43CeJvNqGxNYDjeckHAfW72DKC2s1K1nRr5/uLR42+7976P3nvvh0flEqOcOQtqQq2hER6LIhuXIYOeAhAFbm09aSorcyGHMrVXlaKA4dDnsGM+CidVqLI3iMCmQokFEXLgS02qcsNPCHacROZicL/GW+QEJAaFE6REbZyhtYC8KjkV1tWRugpKJUSv+hOd2UUtJoZOfCiaKjjksrpXy4dj7ShdKNIY5gX10hYjHV5xcnF18fz2M3/451f+yaf8Fzc7pCNKNrwRE3NRp+sPx65vJc772+wlQBkwQjjow5XV299230fvvvvDcXjrKN0us3Er9lshkzrs5KCebzG1FEUqbVdIgI1gptkMJwYCV4RU7Q4gonQq1GFJ4LHyNkhYcUNKAkz5uTBYq2YDpKr64cVKJZ6WTovWmCiMvhDRO08NTIkOoDp6F5cIHUZJhXnb08K4RzWuWWXBQhkdqpwXqIU/S4l7VURVSByw2tdD8DiM/HDQ77MD81BvYeH5jYv/5gsX//nvh89cJkDS7m7nY319SJJxhPyAVPDTJray+kYb1I9EzNlKx47e/Ka7f+zE8TdduRR2O1GR9r20r00byDTnMDAmj5ek0ECIIF0VEWttTd+hx9TDcB2USUeqyoyVoZShBaQ0FURlSsFrGAFDr0W+eEEsX5y03s6RiS12jGg1KqVEGzdgIzukYiIO+lNF7oiN3tLjaKzPBL11kvAkRvGsNfKa8Z2hJOqrf5YSew2ubG4kvU6nt7DY7XWGxQ8/++Czv/47hx59kZWxWRxspn0qpS4zSmhO9h1o0ORgmD1LKFvfojgapZy3ETCMvNPfTne2DvUWB/31JFbHuj8aUZQ52zgGl5Fl0dECJ9NfbPaWcGXPQasduKDxKc2358yAa/t8GLDb66oxZW0OnM8opensM/VcFNdv/faXbGEV9BbplGVuC64c2PBUYpxZGEpPkR56d3YmHDT4hoVa0VX9rdFQUYvrgjt5073zrHCZ2rrSiqdIK/dJlefor4L47OLSU1svLZ44enzHe/7//b2N/+s/Js9vKsnEYWsbsPanp4ww4HxAzJ4BFPmw3MK66enFy0997/sPBuXK8tK55eBmV6J8+urZW9lbcRpAeb/qYjIuL0EEMT0uBbESEY3wUGM2u9qreL3ZXKwHaNa+FpiTkH5P4HC4dAnWK/hiPpHBJXIHOrEYOnFnusFyAYWwJbu1WXJb+DzhevU3n3PW0gSoVymdrR1Ex7dK79Hvrf3Zdzf/wx+Hz2+OA3/c8r1BvRx2h9+v7/Yh7kXifNeZNB3jla1W9+yZm9596tRdpR1iQRnzN1vA6nlOATGx4NKKOZlDxBS5+3P48DWXUmO2ezs1rsAmqgeozcnUhCjiij8/DnnEiwEVWFx69NnwZ6FZJlVxsZFQp0pxmXvol+W3CjLzoxHROrOV7xRr29Ezl/OvP9E9f4X92Vut1ojzduqzW8diX7rtIUCRNDOBFCmlBMQQ6UIQrwT5k66kVcaITJpGkqN8nbt7rZ54jNwRMRXZVfc5h2x56YLYXWdaFtt1znNclWQBzmmnWci4VM+6VEmabtydFTn2KlfXxTwv/fNSFLPSI5MwaUwPiyWGQOJoJ7Wdb9fxPkAOs9Lai2TTTWXgA9nSlqcxxj7XSdnuKnv05NSlsljaW6ppZaYF7fSZzYg7n2ue3Ykiu8aVnoPVvLsceZ2e07zLi4V/Lkaic0l2r6Ep4sprEobXxBKklFtE1iWzJsGc1qDjMGEw++tyP+si++kyuuJlmzRROV6PBA0L+kNsNNQZfwfZ7D1AnfTAKJ1zCrHMVGVfb2Irsesxyva464lfxiWbU3W+TJB6r8mHJAXppOiec5LjumWwuoo8R1+Pt/o45epCXee/qPqIr6Mca4WKecN5msjr6A+Kw5zsvgHJV2XEHz8Sp9WMLGVXu7MyTrgTEaNZK3ROCczil5z2VpkpCHifUk08q988qW+UtceuVHeRz6tQSXSVMn6mnw2B3eCu41KXhiqNNkIlsDKItTvK6r0+PbtHEyaB1dLJvE4ZsEAsaCXDsBwyQqJxjXn8JyH39++e9eI1AC3Rhd32Emvj2drODjkNz7iDYZ1UZ2Rb+pxGPZGls9iz9A1wRlmRz4SaBLj62xpPBmquusk2vLq87VqPaefmWmf10qdmmjCB5No62xKDP8OXFTkvjt49r2rUKTtnedls7KLltdP2dsapLRLjoJphf0Q+u368tWu46vqAjUsjgUYCjQQaCTQSaCTQSKCRQCOBRgKNBBoJNBJoJNBIoJFAI4FGAo0EGgnspQTcYPEepCDxlouIieIgy5Y8f50ZeRZktr2fGHt/zgg1y99tok672t1IdqhN5gxx2yvTMdPhdo4fkDt/TPHZnI7lKdQyJBHrEBDWpYjAssmMkXHSK2Pn7okPc+iOZvbJWnT2T1g4UmUJqMiCfAkH83JzQW5cnZl5pYwXm4ggatiJyh2kjUXHNbk5CnPnWAXHRzNlbprJLUfQpbcu2dDjZYngmbHYpYpLTgSRF/GyycsmOYlfQYNWGiRFtsVpbNzR4YIjNtbda+Xs3l3bYfl45Q+X8FdO/7pRJmE3K/qIssg7TPjddOjELYffefPqj3MCi8qTmUStB9VidwdQ1tdr4bxWqPOHxZ2nwJGCIgeCk1MbRA+YE/5BqaIr2bkseBtWYp0AJgKeMNeqfFu90dJBwkRa6hJEHfcAJmQZMncIELX3As6kB4kpiqAcsGTOvh8dx4AXwQnlFvbzDbhcYNFmD7zAiCVgmhLHk51X4qOodTiZpY1ZJ84q0+pm+BNW86HGX3zcWT/GVo5KFYkr4sAfbG5sPPrUzle+037h8qKXrLeKlKMbuJjO9zldgJXaOvRbF5YJrg7jYr6/zZ5NdZbhQAvjVW6D5eDO+07/ylvP/dShXndYnkNiAIXVyhSMA0rBJgybpNcNcMxG63o40CDRRi1u41UZUFoGaFko5pQTmV2p2wkiKktbiBmpsMG6AxCxCBNAoTqDzsjciclEjdcGe3VR5w5jSg+vQqTPDWykvsKcIKVXlzaL18GLeLEAoGHbgOhwpkiFEHkxea8PpvrGcNUGFN5Y52rEwqgxd+6DllYgs/dFlFaNKGvQF/kiCxafuzC87cubn/xs9sLzGWd+cuuRLivmeglOUs2BqWbmWYqbJFqIdxDMngFU92lKaWUI//jquTed/sWbF29du/Ksz7VnCC70UCEIFqVJWZo+ArBgBh2lWXDwhX6hXFEHUnsqReHFKkohRSCmaKBEDQM1aV/BK+ewYbM49AMOs2iRitmFFcVnwFVCxlo/p+NFqEOJfALEIO8CL/HnXImKWLEU3CLm3HXXiNCvgIEfunveSQW+7Lk2FOKVsofVfUK8wEhgFU2GwtPyAMsTXzI0ylAxctcpm1DYVgJnfc18AkG0E2SL99529OSxrJe88M//o/fc2spmsG3ZorXDV4bcOJmas9c4bxleB8LsGUBN3QAygQhVGgZc0KWLkKLuBqVuzSmKF0xYFexAo8J2LQDTfPaWcj4BhYrd1K0AYcrVNJd0CyeHCrfGAXjZYcJa2ic1KWJhCOSxwB+1pI8Dfip1wRGgUE+K54S/4GUayy+0lddhHTdHjJ73tJLfNumBHthMgOgEbWGFKkcP5TiyFfhAD7SHXNusJBFbWmhL1iQ6+1It3lB3h5ItRWEJ05eJGS/EO5c3R4NsfPLw8t/766PFaP03/sB/5KmCGw65DYFTBrielgMIdGQlmb92RYsY7FNjlcSepE2lwD5u6cLx0F/pnVhYPL20uMiFcQEXxnmcs8ihTFygkIQBr7EfxiEXHbBQnCOVudkDL1pVuomVG5LYoswyXXobie+3WRzse62kkDtXz4YlxFxFi6UdlXEctOOyE3E3kNcJOQ/T53oB7ARPHH0ENxRNmURFOyxbadQq/KQI2zzLsJ0HWFo8s4RzyIospuGop/6igpsYs5hWbMnZHvasLLqtgUZFwHYljvLh68qFbPax03RpkaGAuqRkxSuroOkhccwu97hGtsuZnUk0x3miT1GvtHA51Y9zqpCBWiUYMMwj2EjyI35rdcRVpn1/tXfyztu4XubFHzxTbm1wxi+NUC5/5qRQHburSkAq9UCYPQNowI1HXmqb5tgNNN4e/KD008OH74xGS1STlIk2QpYRV8RSSdPNUc1LmaOgpDpQGhQplTeVIupIfwhcW9PVwJTi0ul26nzIXWFRjFCZtiE4mlJHY6rMpLigYBOmKmy6YjhbE5UGBmSZDnMgJcIXe0hV90vrhuNgzMZOehyUOsdumoWzYlV5073h5E3sMJfFLmyCAF1PXc2aQhQgGoxDeHklkbQLDbkepwAQBV4wSaXOQbHSoMSr7aLGCk1ztmPT/KENA2PSq1e/GJTj1W63G7f6tjW+tbQSHT00uPXk+Nvf8/o7JILPm7QASh+sKuiBwKd1XfckpZHXSTkmCF3XWh6N1p7b+lb5eLi88K57VpdVICoa4KbzcSRTSke405dv3abKFY/QVshTP9L7ofCAJcVPgy2NNTAlrKqRcLXqzDPrHNiOPKEUNFJY8EFvQk9Y48OT4Hy+C2oQqnKFD5yUCLQQ6t21KSlp9bUZOyK5HGsKLy59EeyEdzEh0UrGuC2gwULI0BNHfTegUhRKKrBR1a8PiXoEbrjzX0u1ndpTvGkMgO1wcZhq1TRuquNPJ53t0c5a7BerbSr0tY3taHXp+F//wG1feugvv/An3pUttihxhjKUaN0DM8ikzsgemVzjH9IheY5FxbY5fv6vnv6tO058KIyCY4ePc0/0cLAZxv7i8qHtIecJap+5FToCppYCF1gIx+FjMSqNY8gAB1pWT+rr3A8z0BvQO0HtcNtRwFmudD1QrZzC4XOsDi0HqkvXoohVeea6RJGaW90w2p8E18UY6JtQI0DoNoCjBdXS3GDJvhIUqqHWoIeNpOGlDh79aqk6KV/RgEV9ZTKGO73ycbDkHXryZmvf8aPpCj1ZVWYN5zAUpgktgEstKw5VMryqPw9AwzRDw4dRRq5RlWpEi7tXbv6dn+jshNHDz29vXmHzAULyh3mbO6YgOAhmzwA6TzgXXnjq7Nk7s/6RIl1qtTrcxPf888+ePH5ilHK7KUYKTWoM+ar0MHI1LWJ9ec7+ULnhIyoopJVEI0qViTrKsuhVXpQu1Cp8OYmhXs1Jnw0KR3xwgbGB0gIarXG16BTWBVIUYkJQBbYg9io2RDVJP1CUM/8Ugl/+gydFrfSpXWkBFG+VXvHEB2zi43gqgMVFTPadKPXKr/4bXXll8+Q9d2yOdwZ/8b3Fka/LTGldFfFo10EUSsR+NPsOoDvF0+cvXjh25N5WcmplObp0cePIoRWGYtTSVzkKcCog/ZdWYm7EFYSVp1kpMwpIpepeeZdGsWCuQEVgfIROh1GxVBCVrMWjp4rbfuFk0JKLA4IB3UVSQc9OOhMziwlKw4phVB+LgM5PBaDKwquAOMGoonNkSrNLvwG9ypflCb72qvqdSEimvkknDMsxzsqXgpdlx4+y0yvdM8e6Y2/0/WfLAbtC/JF0uEWq7O1rs+8AGrS9tZ0XLl58/u677tpcC08cPcFZ6mXGWI9aeYgVHKjMDEbqB1FYVkqIWWUrwQsO6vBSdoY3V8aiglatRUILVcbHMIrGsn6W4UZEjqtBwXQTEaq4iQqjoiWO6l2uMDE3fGjiWTodcCAy4CqIxS7OSqGLQlxoTCgN8jZP8SN5RqcgahMIklUu1FAgKVVmHBYtCvviYIOvuOmj5F+2mIzXNldOHIvecsuV7e3wuy8sZ2Vft/Wofbv/zb4DqOcvlN5gM338ke9/6V1v/2AxWC3TuBOHugV+ggOHUakISkDQEnasqIQ7vYITlRJg4kcFZcZ0j+BjEJnBqFEYbGQTABUQi7DiOIuROiUVcyktKO0BpTUWFBsKXomxVMHGwvIKLcBV0wP+BlnVtIpMaYTcPBSlYlZcyqPFDgvxkanSb1S4VrpaGVeqLBYCi5UlApLS74+GK8nCejpaO9I5ds8d4ai4/J0fdtIy3bW5zyLYh499B9CyONJd4iqvDEleuPDirTfdHfm9JO4VbPhG9IYKV36CDmXh2ogqDIck3FzZV4WkAldJq5xl9Cq8ONSYo3ST3fFlqsrisFK27rG+CmKuMCdu1Su81MTER9qYP0OJ031E4T4Yw7i+Gg1PiUq0Fo2+IOWIwQNLluxmw9c0ohFWfJ0Whyk0LkHkSbmAyKKwb9cSQwhjpewTx+E8vhzlm8wrZHFyeKm4+yQj9uk3Htu9+1Rp2I9m3wG03fIGO+NOr52O0ys7T61vgtE35cNDiSFIgLCyUOnKwquAOsWNlbGKTEVnfvLUMJVK12lPYUxh1FRQQAHLuKhsFcoALooqEpwqLxs2ci9CAQylSk1lTlwVm6NWFOIHFxz0IYl0FqP6qhSzhYEGY2yEUccGAqOw+hsnZVoJrmxirjD8r1wVg4Cp/EIfdBe6L62vr7QWl73WxfV1GqPHzpy60N/Iv/0ERPvf7DuA5v64Ha0O+0cYhPbCwdrWY2sv+Pfc/tGIVxWQWmT8UgoGONqaKiKBRcVEYTrU8upgJlqz4U3hWd2PVaz4Z2M3suDucOrqYcWhAFBMUMYbI1HiJme4G2fjR6yClEsCAR2AxJXQ+qeIhU/+KdmKX176hdpica8Co2XFvhq5SUlDYIHERvlTOAMw3ARYObjeveIiNqOXo+c930pv85cX+uWlfBj2Wov9cR6X4d+4b/P//G3FtO+NsnIgzD/++ZfishvkLb8Y+9GAGcehFw1GRSvRQaDMGVKYGjC39pgGDhkjpYTUkJu5WgknW58nfKvtqgVQVk/adBWoMUepK2eB3u6L17AjI5GOm9qZrBCxpSoKQhQ2xGCVuCYMjMCYkDQNwvPMWVylsUygJXpnkbsdds/nIXqMY2LrYAzqTF2hB6uMKHnc8CwyDdArlMZnVYhMnOo7cSmHiZsjUC4qOUBmmSV20bPa8ZFf/odLX3yYaeN1luKOvcPh0nA44Cp5fPeP2XcadJ5oRuvh0vLqiSNn8iwajNeTNjMjXa6TDUOtxqUcDJrST06jmJM0kMrMNA9Ykq7SMDclxF+lWU0v8Wqq14KL7CofC6eyxwlnAlssToXh5vg4lrzJ3f1TrO4fQao6WpxhApHV3bwavJQ0FwW8sVksejhmNpMmVgQG/ZYQfExpuxrD/JQYBcbdRa0fSzhysATwWtEPtnfe/MC7nzv/4vbjT/fGXnuhuz7aTluJx6ztfjIHBqAXth9lEmh56ZZO61DIqcoUZN4K83YejoXNCQoNQ4YZlYwKlHJ1cLS6WiVGIdvDio+StXKvgIWbYcrKCCpDUsVHGMRJT8HfhtWNmRwsoGBWAVdO5uosaFxrnIiDwcw4CzxzxkcttCWOKCzKKv36rCy/isChTU84SQ7Kk+XXnvZefbSVuzIv5yRItm89nJw7sfnQ4+0XrwxGabEQ6K4qKdx9ZA4MQItgcGn9qe3h5pFDNx1euTUfdIeDQWJr1RCncIfRr6RvBWvVHWVmkHNokbegjMGiHwtIfUgI3vGy4MbAefPESQxNt8nROFrTT/hXAPs+YIDdYpioKVwUmxKGplSQaVipOQsqhoqbKKQfLekAFzv0sljSXO7gNx3HNVYWnWLBXzEpO2KIMW7iam2HirHcXRpYnHV+tN0+tPKB+x/4zu9/thiPWSDF9D9zIvvKHBiAtrreINu5uP6I78dLnTsXklW72/0846aUdAUfh1EVEqPlVWE4kFjZW32vAhQKeBqgVahOrQimE6iBC70Y3KSdIJ7Vo8INGlT+lLfh0gEE3CNSF5v4OlSLWoQw5QMBScTJl2PomzM+CmvDJigWyC2pejgmikA6eJoHaPVv0nCwzBso5aLEGw/LguO8naeHBt7p1WMXen737XetP/1i8vzl3oiW/f4yBwagLLFlfU/uZy9dfHI89k8cPbOyuDgYboe+bSIzPFlJCHYGFhWeStZ0laHNykqAsPI1XxFTYhBZOLNbYTpfMGTDQ4KUMAW5MVchTzTiBKMVWqQp1TDgn4hkIZAb7+TNoAkvB9b546NKhDCtpEnXKjPSqUqHq+Wdr3Bq6Tf3yQclalxFLaNADpy4KA8scC6ze3rHLj93fuPk4ujE0lvO3Hb54Sc2L+q+in1lDgxAkXgUsiSZSfmtzf73o7jfSU4tRG/mzlSDAnJX8ZnuougqTVUVlGBFUMHPgFNpXBWsCk9e9k8WBYEPgJWFh4pTzJ360kSmYZRfuVPiVTUvAoHWgKMWhIUzDnBRz9/oHRl2LIp1zviouMNAsdikrWPuPiMXKfz4N4lGm0XN1yXAMVfSr06lkgLJwVIZLHTDtStrreWlC5vrneVl3g/fcur8hRe9Zy8qafvGHBiAsuo9TZfLYjlMtsf+zvr6d3r+W287/k5u/VIpVWWmIjOM6tcVsYrQ3OSH3KU/Ib8WcDio/heCBDjgZapGxWShhDXxMZQJWAYGo7eICCvVpHgmN+IpCkHZuIFyezNuCu0sBm5FAG9F4eK37Lj0i6Va0cSsCt0i1oCaS4m5WNRKZ5UvI7bsKJR9TMTmgqtZoYzAMcj6G8vRKIkXd7xWFgyOdMpTK6u3nL7y259TrveNOTAADeIgZ5uyv91Komzs99PopcHD54M/eefRv8uKTT8asS2N/W3jEQW52G63x+VAIzgMPar4KT8NRqLIWBpK+RgagJNKTIOGGrqhMwEA3GiMPRm11Jp+KU/cIRVC7E5DQF4y7miAwUsjnQIXXAQnhiCZZWBZJzwZa4CMdza3aAUrvhqyVcQ0NeAcEYWWl5IJOvoFGz0YqGUFf1myR4UGKytZ8WJlqhaixizJBujspoOYDchYyA/7qXJQF4cag2WAgxXz2mKizTN5GGuzF1tfWPDKnk62srCQO46KMPOj1jiOuX0uZCi1DIbsAIj8kydPv++tF776yLGtnaDTGifqMR1aOTJwhzXvBWoPDEDZgeTuVQJetiA8HI5HWxubp5ePhFoNf2rUZ5tlurjqxfFoe2MnitosN2ahfVVaZgm4PIZGpVBHh1XFaWvwZecua7pf2gWsTgkuAg/LmYuy7RVJyZponp4sRYklDookzPloYr9M/KLFYmcK3s8TizTBMSjBBH/MLLBimktraEFrB5OXJ4zOM8KOIy79kIPl9XmlPsPljJmxlT0a+8E4zDJ2OzEtEeSpLGUa5FlQDqOci2JHAa8lXqOg4DXVTAE74hBMlvGqwcyUbSxceprCx2NnYcoTDqks5tuy3VRKSM7HRqgszED94I7jSbe79fTF0flLrZS7H1g2PrS9Y3sz/nRgAMqMCh8wisXtq7GPuRylOy+9+JVW68ixlR9rRSE3UJblFTacJVKqAE3L67XTWDvYUG/MBBUszQ98NhoJKVqYrs3BGfYCLUQfDF0qxWoW6dVMtwtLtbrqEuWnySqeLOKXYkb3SHkSCmJaCfTkTImi+qh7pSztI0C1xnhrVkjqWlve2CKnZgXgYGU8EOZJqthsR0Bml9jlFnn6i7VDjv4hm+X0yocWsquIISG2zmmXHRa9al+BXLTvRB8WH7SnPYd815SxfX8krDCLXJJEBJBx4oOiY2uibUQcHD0SnzqysLy89vWHO4MRynXEoKk2TqkKeuPNgQGox9YOQUEwxcQxl0qjUsejfH17e6fTWV1Zvbkddcd9Nom2usnKMNtgTI+FO6pt2TqcjzW5X4zZeOmV7AtnywMbdNJSW9m0oQ0Fg71Q1czhJlwGjAUy6s6sZB7QGxVcFRyMSn9UliO2BmU+NNwxOMoCdBVbhMf85XSOo3EejPJgXPCEzCx4jbD4Yws1Yr0BKi33htAn+SBED5YjtGFUjDjhISrGuET5QjzdwjG1cB4Ol8Czj4UaOosCt8Ej004PbfOg0gfq4J8PQa0CNQAkMpoBfDlqDKihjaO+FL4pziRgbATNmIcsvvMzdsV4nYvZVts/ceetL3znsfEPn0vZ89JNoiGp3RtDXXYwDJ+4FKQSC0aLNB3RCYnQG9niM9sP7Tz0j7bSx99x7u+urtyUDbzBiIX2hzRUiYqjrGw3nNN47Aqli2CtRrUe1aWxV3cjoVOz7CJiBt61SUPKUEzY1MYEOhw1dw9P3VEgzWkaUZoTi1JHqtgkqris26SndctAFv9EQDPWtJFUNcM9fDDwxECGEiZRlmz0Jq7StArDxiYwJlMBRUod/6qHhHov2jHvpFxNXa0xIF4SwY2omltXOom+ikKcXDPV8gUrTdObfIoTeTBEV9P66STsqVdzYE+vRj4wAM20tw40IbuIEwiQuZBGH8RbzbxnLqWPPPj9f1YUrXtv+cRi92g6XvP9VdFTioKGBietkCgGQ5Y6wPgb4ACAR2tVxWY9GWlaFwKamKadAEorgd4L7momgF1u3rQ+MrpIHRcwAQ1aLOKEBOkpQKwmME1NB7h2rLOiXBAxFFYU41oHRInYOSpfgqmfxWsWL5zkq66cGWKTu4Dusib40jGkKwX+yIlYQeMsZNHOeCKjip10W0T8xrQ5qEtsHzVx08CXNPxys50fSb21L3+r+OYjh8dy3slyv9XyRpykswfmwABUKkpDfWg95MkLuFOhZuU6Vnq3F3ae/ur3/uWl7SeOHbqF7ZvFeIWSEymEFLAsVsZUZxhgJhyAErE17KrkRam2qgOcyBK2cjqdpDiFKhGjnBQ59PTqVepCoQq4SMb0wyo7qXJBoIwjXVBmYUmKS5i+iVFIx10pwYuAziLWgc6cEiv9iTOv5EW6zuyGQvGhXSovDQBY+lm1pFwoDfKkq2V5tJRUEaHX6Sviq3GCyZIu2MJoM/Bv7pdrX/2W99x5mkvMgrS8YEtfxN4Ypf1AGM0Tg06pMxqjAggHwKlybiPtOKeJKPGy+o4+EgNSFKVIDUV4GCAsr4yzOGjhaAQqfpWUakexcOqnegIduwu0qp5VgQoLULG7lx8xkYv9qcQ9X0fTWHlChjtvPDEWa2V3LvZs2TZ9V/7GUMkBUn6xYCFMsSuwSyc6Th+YMi6U4YjWhFHR0kABRMqCagCMaehQl6DKmJdzdw4Wp0tk9bSkRgu9nZQRhw3dXZeHO96RhUMvjTe98T6bpHeZaJ6NBBoJNBJoJNBIoJFAI4FGAo0EGgk0Emgk0EigkUAjgUYCjQQaCTQSOPAScEPGBzobCyx2ZKWZ5w18ziUmK8xPht2hTVHWZczG0+s85rhV9G4sfUoT2+A/rzYXZSPzzl7o3FOZqWgry/TdvKZvzDbUmtlkQjyht6UBdQHmsNFMUJ3RJHGt0YHATAIwZ2VLqAqOSNWVTZu1xDfecZLvGx/TDYqBhbo2XYNQC2bps4zJElxaXrhdH+Pcgqwnt/lC4c8BsQIK60Y5ytuEV7m70JSsTbhUkcxIl3n6a2J2Xjxtcuf6uN1c6vV8mPO6nvg1udRHzFIFReoi9oN2i/WseTbiGpvXFMmPHGhGhD8yrz1hQAZYIMnp8IKOypspUW5caJXM0deaVyloIOfYXAWiOWi5k3lcw49VJ7ZCoMLuFNakSWeAyBBqVuk6evO55mHLTCf05lMBShObNcatKrjewx2Rfr37PJdrFDpRTT+HPZrpPDiLReZJlHl5VhqxNMdVWdJgRZSU6YBrYl4XI2AIW7NIFEjqRCeaHf5XZgZLtvdDzo6VnuY7y7UKVf3IuwLljEWrWuvNFErXeNtykmtc3Es9tfkx2a/T0X1/lJdaB8qyEu2T2ZsjcWZEWJOLA+HEerUBS0lYdkzh22U0rI3nxVYtveIcTKGwKwS3EuDidB568SqeJkvMK5eJIP1SH8ZVsl3sdr0q1BzV5KryCdtKj/NqC1p2sdGrO+Ppeo+5eJ4jnzjyxoOwyFvWhCFxbEHRtoKiWW53vXBfkYsEzSonatC2d/NqfMvK8uLKclzkR+aEroeiDhivM9qTNgFoBVMjY3HQbBvUIRIXt6hv+jptGGjThEUxrf2dJY/qAUpb8Br+rk3KrVBzwJ+xe6jW2F7t633YGVVrWIi98+Lz2z94YrB2oeMVsS3HGnO7Ti31jXesq6dufKyvYwzxAtdOssiNa5duevOpn7/z+AePLZ1YXoiz4nh9LHO6wfMAylK+XWhzQCjbtjB0il2LDEiVHS00xgDHitJwWdq6ul3ohGbcqldxRbtqVe4K4s0BdNqtr4J1VW+dGbMjrs5sRkWyvrb2rQd/8Mdf6D/1g17E1WfRaO8u9jzwAE0H61R/vW7vntPvf98dnzi79IC/Qx3lZe36Aqi62deVjYZS6gyb6aYQwX+qBcexriqUi4WaupfxaXPYDdC8reGnimwmSNmt13zpgjQrflQQhOLPJXCnV08/7tqlui7umeeoOxn2mnHEOpjjPl5snWzf2Wv7z3z/O4PnntzJuJ3y2pBv7NueRv5qspqogFQ2/GeAjt2W2qFOYz4cddOVdx7673/i5l+5qXVusJaPi432Mvtz6ztJ6Zy2Govo65PDbguLdApByHBJNOSqI8G0Ip12qi2np5lRjvq234PU2U4MLWtmSLFkyx0ctBie/SDCHGuqtU6+ZfghN7ayHdZOMZfJUI1fHHUsHmuQGaTSiFfR62sdstFX3Iyt1+lrP8lksb1W/lu8ftSXxQVhFTQWGiE8dzaLY93FOB2PRgOvE429jK1Hi63Os+PuZXZnHzmexQte2jrETUt0lHotb2fOBw/3G2mQ8sEwrBIHl1TECDcoj3Rbp3gFDp3x6tvP/Nw77/zQYnJsZ1NrwMNocTyqH53+UbJqJV4xACm8gk0rcdIDvMFMJUy3kQR8sgla24S0d0oQ5U9joU7xGieCiJW4KVuOWDRyEDt5WePDAopGfHDU3hCxcO0AF9CiUxqwkDZnceOmkygUFsOzxeEPuj1e27sEvVabS7rXdwZ+fzO6shZfuJz0Ucnsx8eP7at7g07intOVw2e/Gcb/2L6uwo4Cb2GsK6WHFNT7T/zP7z7383cd/0CSdVBeKCvuns0KNnnXt+0oHJXWdX9O5dRk2hABvcFGAa3o0UPavWS6kYe4kjQix8P19c2Xx8yrcGqvQpGxlFp0WHLBzd1SqMEdoydhBjeNf1oapLQVG29EJzd5oT7FU0HERA97AnPoFaFIcOdT4OHHragYqvNTRvGAEy90SBqb/IJbj3QufePrT/3hH730tQc9tkT3ojRl5ykXju6NOTAADWOmiZBzEKofy60V49hbve3we3/uLf/4cOv2KO3oyG/dHzxmTEQHGMyZypuoud3ifhmAWokLUDKGHuwCjRW8AwvxmUWwdLgxehFBykCi4bACsf0ALMDKP7YZVbYKa0KfDlNQZChAQ5cig68eSgVhFXSKUUUrKOLm+OpjcdjlF8OrUSuE8Wgn4RB9iaw6nX4OAPOFpLUQhqMnH3r0dz/9/Gc/H2V9LldMOXck85Y9b6+OZTwwAFUdWC4yzFLSCeIK2qJ4x8lP/Mxb/9EdS3cUg2TU5wbNNExGZTTkzAXu7mabpArmeqOSrfkTkuqMtI1zn2BDr+qy8CtE6WllT8EbaviKxMvhwAgcpTSZ2fgBmsZF29Oxyll+VUDqevE0EvMyGnNSWNeIla401JmSNmQqB8DUqUvC6KOwf9jUJICXOVqKaWqwBTtqc0UaH8lqp9MZ9jef/OHnf/3/2P72w+3xoMvKhhajy4yneQscJjhvxN+SeeMeBwagyLaVLKqqKQdJ7t1z6j3vOftrbzn8vsE2zSTdIa+DOqJRoPNfOMQIxeNKeLfoXoMGhUXFi6KcoFK/lT6j7AViYUFIUEMTwhmM4gtsRONw6BoDoNrc7EOyytppVNzhp+kbWDguFhOcDW7yF+DwnPy6iEkHX4glS01V/PWqj0G09jSESsOXg/Gw3eZG9HA0GnWT8GgcbD36nUc++5mtB7/AYQ0cIqUTndwEMnujOWZltyDfoPcDA1CKJUqGWUEnduH21b/xwNlfu23pfa1hd1huhImOJ0IdSCdQN3JIkU5CqhepitkAt+upirbOaFf91eJ1BSzYmLK8ilEFd0DgR7iBUhwtOizW2BRFFUQuFkB89EdwNJ/1jITyCuoCI6kyNDp6eRq9+xU7BcSNT9eireJQMKXdIjC7eRNekXCXNLc6t/jeOT2k5xdbP/ze45/7zDN/+sXDkY79GXKjN6dBlX4v4GZkTtbhcvs66dx4N6sObnw0P3oMHGA3SjnTyzu6cO4dt/3qPac/fqh1uEif6yxrrR3HIIHRKFrMsiRPk/YNHrtzUqv64NYrt3604cqyav1oU4H2iqZ0/X0nB+Dn+t2uR+/s0pfgyHW9rHcPE7mA1Yn+or3qyPhAJlFU/Xrc+ZNONYsauMZwGoWxki+GsEm7O+Bgq3G63FsI0/ET3/zGE3/+Z63+WrYzYOmSFoR1W52wU2T0kTKvPWfeScxurOHb3V8m9I4xSBcEamhiVKVzAKLXLdtXwuHSbcFHfvE9/9ObTr9z40o6Go8PHen1Of6iznD4h/+F5AAADrpJREFUYJ2zx0Ebte6TxUa7PSeLlna7c3oTTvCymrsaO6L0dbwnKddwpvAFWyPgFCgpUTkCN3XEBTrqeM7GgQ+tg9kTSgjC1KjxEWeIJ3yoR4ytAZng4gMBnKspWd2rZFEoXv4yahSOYSxTDijVjDqho5geZ9ppr125dHJlMRms/+lv/+vnPvufvPHaauyt7c2U+27xTt/3YRXPIWsDJMvqpKJsaYLdH3jtQTTs3HnoA++76+M3r9wTZotqdYZefzTmqKZpZmYtahDWGXdn5vU+r7ZtqhFOgKW6U/9JsP0Kmlit5gUoRqI6mT/Rqw5GIWJ39Cg814bg3RxVDesfVI6PgqijYw0A88BuRHy5qtsVUEEdH/PDRaeaGB/8q3EABpSSJOn2CL/dH2X5+Phid3Dhma//0e8997UveVtXOEuUJQ31nzXp2SNTX7p7lBhFG3DQoRUf6+I9HQ2ke7oo8LuSv/nAuY/dd8vPxv2jKYhlDVMS93f6yZzFEDc6C2ACBIEQp5CBq1X1YENuNPJY7QQ41FGh/6v6lv861s7GNw1cmirSDV8iU/WssLAxDYyr2hEE5kg/uaMZOTVRa5lsjh8ngEuU+k4UI3ZGMkWAgtaQf8WHATchnc84oC0UctZtxnmSXrDMKaNbl5/62hef/dx/9rYuslgJqv2GTiSw7zSo5K62FC1KDhvi1KqhX7Z63tH/6u3/5MzyOxfKkz6HGaEfSDinaLFosaz/xm60BpXeQn5O200shjSS71ScMKyvi1fROsxJj6pzrVyadnMYg0CU+sGVf5qbEnvkIX3sulDwcbzkAx9kJVr9kzsBjAE/aE1pXgXjeFSO+Y6iuD1O853tbWr8pV63O7zy8Jf+6OHPfsq78ky7zDRJCxrixbyww6Lgvj/MvgSottEs+gGT2myI8c4ufPBdZ/6Hnzr38ThdQncKmREQRS+BYsZDVeTXmxsNUCt+i1b4kNFTOhVkCCpCiVOMDnMOWngYNRi1cIIpQJISrTAqLihNcTEcz2LUuQmmIhcjyBQQSv6Jp+MjV4sJnI+DkAP34hSBFXk79Nq0V8eDJ77yB3/5B5/yLj/bCzNGmxhQQp9zFO9+U6P7DqCSMO1OirYYgM7T7XPvPftrP3nXrwTbqsmY5dRx1jzpNxR+xpUJfPt15kYD1IFQgMAIOFNEyEdqUX7CqPmQIdGIcIJR5ytIS59eg1Hljz/1c+Cjp5gRkrAa4DUWTgVDJhbirCwTNaQVVuVQFHnS6rCDcLCz00vi40utdO38k49885u/+5ve+kuMh/Za4YDDpVn+0u6MOa62arMovv1g6uvHPUxZifq0uSIW+tzSe+/9t3ziXSf+Fh37l1gAkrTY2oEiyH3WJHHGa1QyAbdHAyBq+6naFrowApGVrbVB5cMglPr407ajNVEZJdI/tUoFMgGTz00Ln9SI1Mn6dLNxEgghUPuVyhrVJxSyVAlnwuIPF3w5sV9RKAlyMT7GUnzU2hWemSKGruQE3U5YDi+/9ORffvVbX/58eflpfDu97nbKceZ5HMWGcrVP95VRHvaZaWm3T0xNtHzniV+6/9yvnugcufTci60u40bjnfFoWOzoTHhdgOEl+yz5KuNpCWt9UyVawOPs06FNRymlJ0ACPuUEGvDN041xWmDrXuFi+MZrkmP7VRQ0PqVup3ywOD7CKIKMW6MRGtI/tLzCt/zMY9/9q6//afHsE1RSvcQb9Pvant1eTPOyP+Tu0yrB++eHrO2RQVpctlEu0pvMim0676YvvJKO+8A7kt/14Tv/wY/d/N90y2CUeWH7YlkcrU3ovJXwaJNaelY/1LrbebR1PpR2ndHd63VGcDPN6oIZrqTUuGFG+g/UoPggmIyPqjeOCUplBI2JKjV9zO1Jxke9fztAnvFOo9T9THbCvGKRJoY5nLdLP0lQhCxQQsfGTLKz9p4LJS6mvU6L8+ZHcXr56b/64p986te99SePd+Pz/X024Ckp1JjJB1njdYOdVDnRU03TgkVyXHyhjnlIG3PgHQ5vv//2T5w7dX8rYS0wlRdnqc/bYPS6JRJB1P695ggMTVVop1ZNsYEo+QBUc6w0K5GrJKjWwa9Tw0agFuhUI6rSl4YmPLWJ42/6V6q3E8YsQxBUdYkNl0vQNqe1HrfiIBtsdIr++Sce+uLv/Jty82K3s3DlgKCT/O5pJ0kyRt5jn2PQGQ5hZL4ojxS33n/27zxw2399euFNXsoiBaaUkoxBQFcghLjWOI11rZveXPlf704Jq4Cv+5s3gA/p9cS4WMOvjj1uFsQlDMpJCqVM8ZmM0ssHxNl4EKiTfuQfFr5IjRm5qhsqGetCKSFSqBWhUcrF+kUJtyNpYyvIZXguybnYS1ftZKzrOtTJXnrswQc/81uDFx5l2A4Ny1oacuBY7/PnXgKUstEBLLHXWwgyrh/KmUFf/cW7/5d7Tv/Mqd5bUKUZg8ecyhBG1PJqw9eZSfHv9psH0JdxNwAJBbN/ptF2M+ddkLqW0r0KZXhPnmaVC8rNtRWrsScjUgvSPiW6QA5oFs54cxEibKxetzxWGKWHpdRoIAO2QrNLS8zMKODnthrWeBRRCkJL3YPUTkYXfvjQ1//o31567KsL0ZBd1NpLlSywIER89r3Zs1axKriqSL0R3Z40XvVvu/vMA+++6b9tcdUgCzxHSZlxOxK3VaGuuCb68OsiTMX7aoyAU2fmfRjWM1EACAgrtWlaDpvN9Kgbzqy45nEdzNwXMHFEwzoyXdUBWo2FgEjLFQ4E4WYnNY24CUmTTVrXb80EKn0qGfr8um2vLFrcQMeZVWH+3OMPfuZT/yp/4TurnXI8kI7ttDuDIb8Hw+wZQE0DIG0WbTOyEve8M++86WPve8vPt3c4tYamx3qQUI5clalxpYjbqOYA5fUS81zgvqZ4HbcpRqsv0TDJ3WEOo1rgZFd3CKL8dxgVENWl13wlTpp+0r2xIrUWpiAPiPXCzLlNiIJRBBbG3OSZ5SyTK6IoakV5Od4YbJz/s9/9zfzFxz2Phr50Lz3E0XDHj3qC6kEwewZQm5RWe4qiaHmH7zvxU/ef+YVbo/u1cE66pcfCTl2+ikS5fMh73TpJ+jDqTH3fvo7Suc0DtGsrA4XdGDVNqdnya8dHpWGhNkiCQmlMveAoCU0xigPfrcb0+WEcSeNSdOBBsCadJDCm11hhU2rMkzsSi9Hmi089/NRjX9989i8Wul0u3Vwf5L1eh9V0sOrG/k4DUEl5vqEBiifVVhy0b1q+/b7b33/r6tuHL3rJ8jjPk3EaZ1wEH12IIq5tPepndKPm83o9fOZV5dbi+1EjEHPUZwVelKNtT7WFw7SJhS/h1poEagm4QU8+TIIIo9TaqsxFpLBKksY61d0ymKpxiy5Wc0J3yIZcMTvorz/52LcfefALi1466m/o84taOwOuVG734pDNHT9qlt6o8HumQellxm0vpaVetJeSW04svHnBSzYHXt6h36ZzWRK266THJ0dWzV0HFlNidcauUa3xUMnWGinzGuPGcWo8uL69ztiIe+UhwExotP5NY0M6hgsDjJxP3tXBhlTSdIJ0nSFGNbbXzrTmEDXKQBsVjS6tU4MUMi07gpFuIDVf1C+U4z69+IhLt9ph/7FHP//lL//GC89+nmm2renaj0wDn9yiu71nW4iJ/1WbPQMobUpJTDVauj54/qnL3149dtPSzccHdpPaK8+Hhq3rjJVyjUce1M+Nut7M9QFmATfry23Cs69T+xSRU5fKUk8ulUcdbcrPQ/MJebDQr/6wS+3yNzV2/y145cpwKiH7rOS9sDBmXUg2eukH57//6He/9NKLTyBbCOaIZ8puv1tms/6GplUnaXKwG8XGfc/eiTOL73jLyQ+ePfrWMHp1zU3Nm9SZeYAr0VN1Zi6g50io0EnENWYen3lAKQJtq1QeaEpaN9ylvMeAkHrv6hTxkUAgX6TGteG4W7tTLuhRS8Xm4Jmy7G9tvPD0099+9smHsvEVZuR0W3F9dmtSvj+d5oj/xic29Dpctu5zris1+RC5Ly16J08s3joaz5yv+QqSoU5DnXHFfL0Pk43XO76Mi2Yg68y8ffd1tHKbp4m9fAzOZDSMKZi69LFTQ6EMo1gcOrEwRYqd9oDInOpVPcT/Vl5uD4cX0v5LvFnzFM3LUWP1HxI0B8LMEf+NTzt7CZkpDuOUBUq6kzxFpozc2VKmVxO7G7++PoSV7/XOdshRjbM6KLVmHtDn1Ni1POQ477OoFPqEXQVW6CcBnMvUHWBqcN/FMxsq7XHxrY5GY6KTDj0DraqfOFPvYMy5zxPcngE09jrsvNZ12lIb9DwldxqU5evVhJ8DuGvac7NSmUc/SzNrnye5eXxeln6XJyqSHvtsbC9jd58oY58sbKALRtu4YE+xgOolYa+fv7oa6WUi2hOvPeskMXdkI8c2XkgfnR4ux/erR/D6JGlXkU+Fa/ON07erlnn089wnCu4qB2ebRz8fblKD+IIzwl6tEK7dejFlW066/9OIaePgW4ieij/gPDDOqcMXvqW2v08JD6RlmvE9SD1x64PXMVyI0dqSlBHAfT1M1ZS7jpWNl1/nStnOQdykFt0dROM+tWY+EmvJdzla993cJjsFXFtl2mIR3lyhgUuoLTrGoXQKiDDJQFWEs8agyhEV0o+WnF2pa14bCTQSaCTQSKCRQCOBRgKNBBoJNBJoJNBIoJFAI4FGAo0EGgk0Emgk0EigkUAjgUYCjQQaCTQSaCTQSKCRQCOBRgKNBBoJNBJoJNBIoJFAI4FGAo0EGgk0Emgk0EigkUAjgUYCjQQaCTQSaCTQSKCRQCOBRgKNBBoJNBJoJNBIoJFAI4FGAo0EGgk0Emgk0EigkUAjgUYCjQQaCTQSaCTQSKCRQCOBRgKNBBoJNBJoJNBIoJFAI4FGAo0EGgk0Emgk0EigkUAjgUYCjQQaCTQSaCTQSKCRQCOBRgKNBBoJNBJoJNBIoJFAI4FGAo0EGgk0Emgk0EigkUAjgUYCjQQaCTQSaCTQSODASOD/A60jklgwDCxJAAAAAElFTkSuQmCC"
                      />
                    </defs>
                  </svg>

                  <input
                    type="text"
                    placeholder="Enter Amount"
                    className="px-4 py-2 rounded-md mr-2 text-gray-700"
                  />

                  <div className="border border-black border-r-2" />
                  <select className="px-4 py-2 rounded-md mr-2 text-gray-700">
                    <option>Native Stake</option>
                    <option>Other Option</option>
                  </select>
                  <Button className="rounded-full" disabled>
                    Stake Now
                  </Button>
                </div>
              </div>
            </div>
            <div className=" w-full items-center justify-center flex gap-2 my-6">
              <Text className="text-xl text-black">Operated by</Text>
              <Logo />
              <Text className="text-xl font-bold text-black">Cubik</Text>
            </div>
          </div>
          <main className="container mx-auto text-center my-48">
            <div className="flex justify-around">
              <div className="flex flex-col items-start gap-2">
                <p className="text-black text-[32px]">TVL</p>

                <h2 className="text-5xl font-bold text-black">$10,877</h2>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p className="text-black text-[32px]">APY</p>

                <h2 className="text-5xl font-bold text-black">6.9%</h2>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p className="text-black text-[32px]">Holders</p>

                <h2 className="text-5xl font-bold text-black">7,890</h2>
              </div>
            </div>
          </main>
        </header>

        <div className="bg-black h-[1px] w-full max-w-7xl flex items-center mx-auto" />

        <Footer />
      </div>

      {/* <div className="flex gap-12">
        <div className="flex flex-col flex-[0.6] gap-16">
          <div className="gap-3 flex flex-col">
            <Text className="h3">Stake</Text>
            <Text className="b2-light" color="secondary">
              Stake with ice staking and help fund public goods
            </Text>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col min-h-32 min-w-44 justify-between">
              <div>
                <Text className="l1-light" color="secondary">
                  APY
                </Text>
                <Text className="h4">7.84%</Text>
              </div>
              <div>graph</div>
            </div>
            <div className="flex flex-col min-h-32 justify-between">
              <div>
                <Text className="l1-light" color="secondary">
                  Volume
                </Text>
                <Text className="h4">$305.6k</Text>
              </div>
              <div>graph</div>
            </div>
          </div>
        </div>

        <div className="flex-[0.5]">
          <div className="bg-color-white w-full p-6 rounded-2xl shadow-xl flex flex-col gap-11 items-center ">
            <div className="w-full">
              <SegmentContainer size="sm">
                <SegmentItem
                  isActive={stakeState === "stake"}
                  onClick={() => setStakeState("stake")}
                >
                  Stake
                </SegmentItem>
                <SegmentItem
                  isActive={stakeState === "unstake"}
                  onClick={() => setStakeState("unstake")}
                >
                  Unstake
                </SegmentItem>
              </SegmentContainer>
            </div>

            <div className="flex flex-col gap-6 items-center w-full px-6">
              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between w-full">
                  <div className="flex gap-[10px]">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/66c41648-d23e-4bee-45df-5ec4ecce5200/public"
                        alt="ice sol logo"
                        className="rounded-full w-full"
                        height={40}
                        width={40}
                      />
                    </div>
                    <div>
                      <Text className="h5">SOL</Text>
                      <Text className="b3-light" color="secondary">
                        Stake $SOL
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <Button
                      variant="unStyled"
                      className="bg-color-surface-primary-transparent"
                      size="sm"
                    >
                      Use max
                    </Button>
                    <Text className="b3-light" color="secondary">
                      13.301
                    </Text>
                  </div>
                </div>
                <div className="h-[1px] bg-color-surface-primary-transparent" />
              </div>

              <div className="flex items-center flex-col">
                <InputField
                  defaultValue="0.0"
                  className="text-[48px] text-color-fg-primary-subdued flex items-center justify-center text-center"
                  type="number"
                  min={0}
                />
                <Text className="l3-light" color="secondary">
                  = $0.0
                </Text>
              </div>

              {value === "liquid-stake" && (
                <>
                  <div className="bg-color-surface-primary-transparent rounded-full flex items-center justify-center p-2">
                    <Icon
                      name="arrow-down"
                      color="#666666"
                      height={14}
                      width={14}
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="flex gap-[10px]">
                      <div className="flex-shrink-0">
                        <Image
                          src="https://imagedelivery.net/rWTckr21FEHs39XCNFz7Yw/14ecae6e-2c9f-448d-d695-a1853550e200/public"
                          alt="ice sol logo"
                          className="rounded-full w-full"
                          height={40}
                          width={40}
                        />
                      </div>

                      <div>
                        <Text className="h5">iceSOL</Text>
                        <Text className="b3-light" color="secondary">
                          Recieve $iceSOL
                        </Text>
                      </div>
                    </div>
                    <div>
                      <Text className="h4">135.6</Text>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="w-full flex items-center flex-col justify-center gap-5">
              <div className="flex flex-col gap-3 w-full">
                <div className="flex justify-between w-full">
                  <Text className="b4">Transaction Fees</Text>
                  <Text className="b4">0.0004 SOL</Text>
                </div>
                <div className="flex justify-between w-full">
                  <Text className="b4">Stake Settings</Text>
                  <div className="bg-color-surface-primary-transparent rounded-full flex items-center justify-center p-1">
                    {expandSetting ? (
                      <div onClick={() => setExpandSetting(!expandSetting)}>
                        <Icon
                          name="chevron-down"
                          color="#666666"
                          height={14}
                          width={14}
                        />
                      </div>
                    ) : (
                      <div onClick={() => setExpandSetting(!expandSetting)}>
                        <Icon
                          name="chevron-right"
                          color="#666666"
                          height={14}
                          width={14}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {expandSetting && (
                  <div>
                    <CustomRadioButton
                      options={radioOptions}
                      defaultValue="liquid-stake"
                      name="viewDensity"
                      onChange={(newValue) => setValue(newValue)}
                      className=""
                      value={value}
                    />
                  </div>
                )}
              </div>
              <Button variant="primary" className="w-full">
                Stake
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
