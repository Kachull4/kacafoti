import AvatarSrc from "./images/avatar.png";
import LandscapeSrc from "./images/DSC06018-Enhanced-NR.jpg";
import AnimalSrc from "./images/DSC09353-Enhanced-NR.jpg";
import PetSrc from "./images/DSC03151-Enhanced-NR-2.jpg";
import { AnimatedOnScroll } from "../components/animated-on-scroll";
import { ContactBlock } from "../components/contact/contact";

import {
  Avatar,
  Container,
  Heading,
  Intro,
  Menu,
  Navbar,
  Title,
  Card,
  Photo,
  MenuItem,
  MenuLink,
  AnimalsSvg,
  CardButton,
} from "./styled";

export default function Home() {
  return (
    <>
      <Navbar>
        <Container>
          <a href="kacafoti.cz">
            <Title>Káča fotí</Title>
          </a>
          <Menu>
            <MenuItem>
              <MenuLink href="#uvod">
                <svg
                  viewBox="0 0 512 512"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <g id="Teacher">
                    <path d="M300.3291,215.1624a10.0955,10.0955,0,1,0,10.0957,10.0957A10.1073,10.1073,0,0,0,300.3291,215.1624Z" />
                    <path d="M237.8374,225.2581a10.0955,10.0955,0,1,0-10.0952,10.0952A10.1069,10.1069,0,0,0,237.8374,225.2581Z" />
                    <path d="M266.8564,269.5872a2,2,0,0,0,0-4c-5.9536,0-10.9834-3.3843-10.9834-7.39s5.03-7.39,10.9834-7.39a2,2,0,0,0,0-4c-8.2617,0-14.9834,5.1093-14.9834,11.39S258.5947,269.5872,266.8564,269.5872Z" />
                    <path d="M295.4014,292.325a2,2,0,0,0-2.753.6494,33.6255,33.6255,0,0,1-57.2255,0,2,2,0,0,0-3.4024,2.1035,37.6258,37.6258,0,0,0,64.03,0A2,2,0,0,0,295.4014,292.325Z" />
                    <path d="M207.1646,189.325a1.9984,1.9984,0,0,0,.5664-.0821l7.3276-2.1592a30.1488,30.1488,0,0,1,22.2168,2.0254,2,2,0,0,0,1.8057-3.5693,34.1375,34.1375,0,0,0-25.1534-2.293L206.6,185.406a2,2,0,0,0,.5645,3.919Z" />
                    <path d="M290.7959,189.1091a30.1484,30.1484,0,0,1,22.2168-2.0254l7.3271,2.1592a2,2,0,0,0,1.1309-3.8369l-7.3271-2.1592a34.1423,34.1423,0,0,0-25.1543,2.293,2,2,0,0,0,1.8066,3.5693Z" />
                    <path d="M402.752,392.4749A48.58,48.58,0,0,0,364.2959,380.9l-64.7091,8.7087v-.0007l-.4463.06V348.9114a84.0863,84.0863,0,0,0,47.1133-59.5777l17.8115-88.5664-39.9677-18.789a187.5963,187.5963,0,0,1-85.5293-81.626l-1.5269-2.8892-72.9268,103.85,17.7027,88.0205A84.0831,84.0831,0,0,0,228.93,348.9113V389.668l-47.5069-6.3933a37.5937,37.5937,0,0,0-4.3261-7.6265,36.62,36.62,0,0,0-29.1842-15.1289,28.2443,28.2443,0,0,0-1.9117-5.06l1.8322-22.469a328.7472,328.7472,0,0,0,.3027-49.2549l-7.6728-110.91a111.3949,111.3949,0,0,1,111.27-111.2012h24.6045a111.3946,111.3946,0,0,1,111.27,111.2016l-7.6728,110.91a328.8138,328.8138,0,0,0,.3027,49.2549l.72,8.8271,1.0606,13.0074,1.0957,13.4277a1.9993,1.9993,0,0,0,1.9912,1.8374c.0547,0,.1094-.002.165-.0068a1.9994,1.9994,0,0,0,1.83-2.1558l-1.0957-13.4277-1.06-13.0074-.72-8.8271a324.8269,324.8269,0,0,1-.2988-48.6533l7.6777-110.9795.0049-.1382a115.4,115.4,0,0,0-115.2695-115.27H251.7334a115.4005,115.4005,0,0,0-115.27,115.27l7.6826,111.1177a324.8269,324.8269,0,0,1-.2988,48.6533l-1.4066,17.25a28.1822,28.1822,0,0,0-31.236-8.613l-1.6514.5884.3672,1.7143a28.2209,28.2209,0,0,0,12.119,17.689,37.0125,37.0125,0,0,0-27.6248,47.397l10.371,32.7016a18.6,18.6,0,0,0,26.6636,10.6914,14.5339,14.5339,0,0,1,14.0259,0h0a18.6,18.6,0,0,0,26.6636-10.6914L182.51,408.6907a36.7278,36.7278,0,0,0,.3922-21.1814l46.3136,6.2326,9.1174,51.5113a2,2,0,0,0,3.9385-.6973l-9.3721-52.95a1.3105,1.3105,0,0,1,.0308-1.4092v-39.57a83.1854,83.1854,0,0,0,62.21,0v39.5557a246.56,246.56,0,0,1-49.227,1.3213,2,2,0,0,0-.2949,3.9893,250.822,250.822,0,0,0,49.0786-1.207l-8.8985,50.269a2,2,0,1,0,3.9395.6973l9.1168-51.5106,65.974-8.8791a44.5773,44.5773,0,0,1,50.5225,44.1787v15.8623a2,2,0,0,0,4,0V429.0422A48.5746,48.5746,0,0,0,402.752,392.4749Zm-288.4747-47.95a24.1875,24.1875,0,0,1,29.63,16.524,24.1859,24.1859,0,0,1-29.63-16.524Zm64.42,62.9566-10.3706,32.7016a14.6007,14.6007,0,0,1-20.93,8.3917l0,0a18.5173,18.5173,0,0,0-17.868,0,14.6007,14.6007,0,0,1-20.93-8.3917l-10.371-32.7016a32.987,32.987,0,0,1,30.528-42.9548,27.9974,27.9974,0,0,0,17.4878-.0271h.9939a33.0048,33.0048,0,0,1,31.4605,42.9819ZM168.3745,202.2073l68.2026-97.1226a191.6815,191.6815,0,0,0,85.8194,80.5137l37.13,17.4551-3.7472,18.6313a34.5817,34.5817,0,0,0-33.3056-25.2734H306.6143A34.5786,34.5786,0,0,0,272.05,229.94a22.4753,22.4753,0,0,0-16.0289,0,34.5772,34.5772,0,0,0-34.5636-33.5283h-15.86a34.58,34.58,0,0,0-33.3053,25.2734Zm95.6611,150.4546a80.0951,80.0951,0,0,1-78.2963-64.1172l-7.2572-36.0825a34.5491,34.5491,0,0,0,27.1151,13.1147h12.86a2,2,0,0,0,0-4h-12.86a30.5828,30.5828,0,1,1,0-61.1655h15.86a30.5709,30.5709,0,0,1,30.5633,31.4673l-4.3606,2.396a2,2,0,1,0,1.9257,3.5058l1.9027-1.0454a30.4772,30.4772,0,0,1-18.26,22.4893,2,2,0,0,0,1.541,3.6914A34.4707,34.4707,0,0,0,255.4839,237.17c.1695-.9341.2871-1.87.3794-2.8057a18.5286,18.5286,0,0,1,16.3443-.0005c.0923.9358.21,1.8719.3793,2.8062a34.5643,34.5643,0,0,0,34.0274,28.4072h15.8593a34.8668,34.8668,0,0,0,3.7764-.2051,2,2,0,1,0-.4336-3.9765,30.867,30.867,0,0,1-3.3428.1816H306.6143a30.5626,30.5626,0,0,1-30.0351-24.8437l1.9062,1.0473a2,2,0,1,0,1.9257-3.5058l-4.3608-2.3962a30.5721,30.5721,0,0,1,30.564-31.4671h15.8593a30.5827,30.5827,0,0,1,17.4453,55.7021,2,2,0,1,0,2.2832,3.2847,34.7375,34.7375,0,0,0,7.3819-6.9109l-7.252,36.0574A80.0964,80.0964,0,0,1,264.0356,352.6619Z" />
                    <path d="M147.2368,374.5574a2,2,0,1,0,0,4,18.9464,18.9464,0,0,1,18.0606,24.6743,2,2,0,1,0,3.8125,1.21,22.9468,22.9468,0,0,0-21.8731-29.8843Z" />
                  </g>
                </svg>
                O mně
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink href="#zvirata">
                <AnimalsSvg
                  enable-background="new 0 0 512 512"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M43.306,286.755l112.468,10.087c0.039,0.445,0.084,0.893,0.119,1.336l0.011,0.114c0.095,0.979,0.172,1.958,0.251,2.969  c0.188,2.253,0.356,4.486,0.513,6.7l0.018,0.255c0.063,0.914,0.125,1.829,0.182,2.795c0.067,1.028,0.135,2.056,0.183,3.074  l0.008,0.134c0.037,0.55,0.066,1.103,0.096,1.654l0.048,0.9c0.129,2.437,0.237,4.861,0.327,7.272  c0.068,1.693,0.118,3.357,0.167,5.021c0.02,0.681,0.038,1.352,0.049,2.022l0.003,0.115c0.017,0.503,0.025,1.007,0.034,1.51  l0.004,0.206c0.028,1.145,0.049,2.279,0.059,3.434l0.02,2.188c0.069,10.455-0.239,19.73-0.916,27.563l-0.567,6.511  c-0.375,4.082-0.122,8.159,0.689,12.108c-5.395,2.522-11.5,3.316-17.625,2.116c-5.545-1.086-10.659-3.875-14.623-7.901  c-5.993-6.088-8.875-14.168-8.092-22.654l0.559-6.527c0.367-4.261,0.745-7.352,1.078-10.077c0.827-6.773,1.371-11.227,0.621-23.88  c-0.215-3.628-3.359-6.384-6.983-6.106l0,0c-3.539,0.27-6.204,3.337-5.991,6.88c0.688,11.396,0.236,15.089-0.551,21.53  c-0.346,2.834-0.738,6.046-1.126,10.54l-0.556,6.488c-1.067,11.578,2.813,23.146,10.647,31.735c1.937,2.123,4.077,4.021,6.376,5.677  c0.811,19.434,14.154,34.575,30.6,34.575h26.389c5.364,10.52,15.077,17.47,26.217,17.47h31.554c4.003,0,7.247-3.244,7.247-7.247l0,0  c0-2.905-1.777-5.566-4.519-6.53c-7.551-2.653-13.132-11.795-13.132-22.633v-0.746c6.739-5.98,11.39-14.055,13.151-22.882  l0.117-0.572c3.71-18.641,5.754-45.908,5.605-74.82l-0.002-0.248c-0.01-1.663-0.021-3.334-0.05-4.978  c-0.058-4.383-0.177-8.926-0.354-13.502c-0.05-1.335-0.101-2.671-0.172-3.996c-0.031-0.861-0.073-1.722-0.121-2.509  c-0.041-0.857-0.083-1.714-0.131-2.511c-0.052-0.966-0.103-1.933-0.164-2.866c-0.079-1.297-0.169-2.585-0.259-3.872  c-0.014-0.254-0.035-0.515-0.059-0.768c-0.102-1.485-0.211-2.961-0.328-4.372c-0.023-0.314-0.047-0.62-0.078-0.925  c-0.072-0.935-0.153-1.864-0.236-2.695c-0.104-1.231-0.218-2.451-0.342-3.662l-0.016-0.153c-0.012-0.128-0.024-0.256-0.038-0.382  c-0.354-3.533-0.746-6.938-1.176-10.206c16.667,5.769,51.342,15.713,92.365,15.713c10.082,0,20.553-0.603,31.229-2.014  c-0.002,0.099-0.006,0.199-0.008,0.299c-0.258,12.158,0.067,24.735,0.923,37.037l-97.797-8.768  c-3.575-0.321-6.732,2.317-7.053,5.893v0.003c-0.32,3.574,2.317,6.731,5.892,7.052l49.894,4.474  c4.972,22.471,11.425,41.937,18.326,55.19l13.787,26.455c2.99,5.751,7.407,10.458,12.646,13.851  c3.76,16.581,16.551,28.236,30.861,28.236c1.089,0,2.188-0.067,3.291-0.205l11.695-1.456c5.579,6.991,13.483,11.315,22.272,11.315  h31.553c4.002,0,7.247-3.244,7.247-7.247l0,0c0-2.905-1.777-5.566-4.519-6.53c-7.551-2.653-13.132-11.795-13.132-22.633v-0.042  c0.55-0.659,1.087-1.334,1.598-2.038c7.08-9.757,9.063-22.399,5.319-33.782l-0.256-0.796c-3.121-9.934-4.668-29.266-4.591-48.112  l23.396,2.096c3.575,0.319,6.733-2.319,7.054-5.895l0,0c0.32-3.576-2.318-6.734-5.895-7.055l-24.232-2.17  c0.551-11.848,1.805-22.496,3.778-29.156c0.52-1.749,1.044-3.537,1.573-5.356l21.99,1.971c3.576,0.32,6.734-2.318,7.055-5.894l0,0  c0.32-3.576-2.318-6.734-5.894-7.055l-19.552-1.752c6.644-24.191,12.806-51.002,12.806-67.233v-19.46  c0-29.12-11.341-56.503-31.936-77.107c-20.603-20.592-47.985-31.933-77.104-31.933l-0.332,0.008  c-2.548,0.131-62.656,3.265-92.74,9.845l-13.73,2.427c-26.922,4.765-58.862,3.528-94.938-3.674  c-7.467-1.488-15.237-2.634-23.103-3.405c-7.624-0.739-15.453-1.13-23.297-1.16c-50.591,0-91.75,38.202-91.75,85.16  c0,0.771,0.011,1.541,0.033,2.345l0.005,0.141c0.021,0.581,0.041,1.162,0.07,1.735c0.098,1.851,0.263,3.722,0.486,5.52  c0.088,0.749,0.196,1.487,0.306,2.21c0.119,0.807,0.25,1.612,0.401,2.409c0.061,0.354,0.128,0.708,0.196,1.063l0.021,0.113  c0.068,0.349,0.145,0.695,0.224,1.043c0.081,0.404,0.165,0.809,0.267,1.212c0.403,1.775,0.871,3.542,1.376,5.2  c0.143,0.481,0.295,0.964,0.441,1.426c0.188,0.599,0.388,1.196,0.57,1.698c0.868,2.51,1.875,5.006,2.993,7.421  c0.191,0.438,0.393,0.865,0.605,1.292c1.181,2.443,2.479,4.824,3.818,7.008c0.267,0.448,0.544,0.888,0.859,1.385  c1.398,2.215,2.946,4.41,4.604,6.527c0.295,0.397,0.599,0.783,0.885,1.134c2.093,2.604,4.341,5.096,6.648,7.371  c0.357,0.358,0.728,0.716,1.035,1.005c1.229,1.186,2.545,2.374,3.842,3.472c0.399,0.349,0.81,0.696,1.227,1.03  c0.123,0.108,0.25,0.212,0.381,0.311c0.369,0.308,0.74,0.607,1.119,0.899c0.944,0.75,1.946,1.507,3.037,2.294  c0.536,0.391,1.083,0.771,1.597,1.12c0.443,0.307,0.888,0.614,1.275,0.865c0.436,0.294,0.872,0.585,1.317,0.86  c0.453,0.3,0.916,0.591,1.381,0.876c0.085,0.052,0.171,0.101,0.256,0.152l-17.743-1.591c-3.576-0.32-6.734,2.318-7.055,5.895l0,0  c-0.32,3.575,2.318,6.733,5.894,7.054l101.044,9.059c0.096,0.433,0.192,0.873,0.292,1.325c0.122,0.541,0.235,1.091,0.35,1.642  l0.126,0.634c0.104,0.481,0.197,0.962,0.293,1.443l0.032,0.166c0.222,1.092,0.435,2.184,0.643,3.312l0.062,0.323  c0.082,0.435,0.164,0.865,0.239,1.303l0.046,0.24c0.016,0.071,0.032,0.146,0.044,0.221l0.042,0.246  c0.111,0.584,0.213,1.179,0.32,1.812l0.561,3.264c0.145,0.881,0.29,1.771,0.432,2.712c0.197,1.262,0.395,2.523,0.583,3.798  c0.266,1.794,0.521,3.599,0.765,5.384l0.016,0.121c0.133,1.008,0.264,2.007,0.386,3.016l0.016,0.116  c0.103,0.735,0.195,1.471,0.279,2.205l0.028,0.221c0.027,0.186,0.047,0.371,0.068,0.563l0.163,1.438l-109.937-9.859  c-3.575-0.321-6.733,2.317-7.055,5.893l0,0C37.091,283.275,39.729,286.434,43.306,286.755z M151.402,414.12  c-7.375,0-13.845-6.268-16.438-14.995c3.276,0.825,6.665,1.265,10.097,1.265c5.768,0,11.395-1.186,16.595-3.464  c1.506,2.648,3.301,5.146,5.384,7.43c1.935,2.12,4.073,4.015,6.369,5.669c0.058,1.389,0.181,2.755,0.363,4.096H151.402z   M204.008,431.59c-7.374,0-13.842-6.263-16.436-14.984c3.275,0.825,6.66,1.265,10.09,1.265c5.169,0,10.272-0.986,15.044-2.846  c1.001,6.226,3.337,11.896,6.645,16.565H204.008z M359.596,386.846l-13.788-26.458c-5.988-11.501-11.67-28.315-16.25-47.965  l36.591,3.28c0.059,0.563,0.108,1.136,0.169,1.696c0.099,0.936,0.205,1.862,0.314,2.798l0.043,0.381  c0.17,1.464,0.349,2.91,0.536,4.347l0.043,0.336c0.13,1.016,0.269,2.012,0.421,3.108c0.143,1.021,0.296,2.051,0.45,3.087  c0.154,1.015,0.308,2.019,0.482,3.089l0.231,1.424c0.165,0.999,0.34,1.997,0.513,2.964c0.175,0.99,0.351,1.969,0.536,2.941  c0.369,1.926,0.749,3.832,1.142,5.668c0.186,0.885,0.379,1.751,0.582,2.617l0.038,0.17c0.204,0.914,0.421,1.818,0.636,2.702  c0.103,0.446,0.214,0.886,0.332,1.351c0.226,0.925,0.463,1.838,0.696,2.681c1.188,4.432,2.48,8.542,3.847,12.226l10.409,27.957  c0.162,0.436,0.356,0.853,0.533,1.279c-1.343,0.431-2.731,0.75-4.164,0.943l-0.258,0.031  C373.844,400.721,364.168,395.637,359.596,386.846z M393.255,421.83c-6.247,0.78-12.4-3.055-16.341-9.38  c1.283,0.137,2.574,0.228,3.877,0.228c1.351,0,2.711-0.075,4.072-0.228l0.432-0.05c3.521-0.438,6.887-1.355,10.062-2.726  c0.966,1.018,1.983,1.979,3.055,2.878c0.291,2.935,0.872,5.755,1.706,8.423L393.255,421.83z M428.832,431.59  c-6.291,0-11.922-4.561-15.051-11.315c2.661,0.623,5.413,0.959,8.215,0.966c0.03,0,0.061,0,0.09,0  c5.648,0,11.057-1.284,15.933-3.673c1.175,5.228,3.304,9.997,6.155,14.022H428.832z M42.89,179.459c0,0.617,0.034,1.228,0.055,1.841  c-0.38-0.954-0.746-1.919-1.089-2.909c-0.149-0.413-0.29-0.835-0.429-1.277c-0.126-0.397-0.253-0.796-0.387-1.247  c-0.437-1.436-0.83-2.922-1.167-4.417l-0.049-0.201c-0.057-0.217-0.097-0.435-0.149-0.698l-0.034-0.157  c-0.056-0.246-0.111-0.492-0.156-0.721l-0.02-0.1c-0.052-0.271-0.104-0.543-0.149-0.813l-0.03-0.168  c-0.123-0.638-0.228-1.285-0.325-1.946c-0.09-0.602-0.181-1.204-0.258-1.855c-0.19-1.534-0.328-3.096-0.409-4.638  c-0.026-0.496-0.043-1-0.061-1.505l-0.004-0.098c-0.018-0.641-0.026-1.289-0.026-1.938c0-39.789,35.327-72.16,78.725-72.16  c7.418,0.029,14.843,0.398,22.061,1.099c7.433,0.729,14.775,1.812,21.822,3.215c37.663,7.521,71.221,8.774,99.744,3.728l13.86-2.45  l0.263-0.053c28.245-6.205,87.02-9.39,90.582-9.578c25.585,0.044,49.641,10.029,67.745,28.125  c18.139,18.147,28.128,42.267,28.128,67.915v19.46c0,14.735-6.194,43.722-17.442,81.623c-6.439,21.729-6.131,76.618,0.565,97.93  l0.282,0.878c2.492,7.577,1.225,15.642-3.479,22.123c-4.51,6.216-11.422,9.776-18.973,9.776c-0.02,0-0.039,0-0.058,0  c-9.878-0.023-18.828-6.263-22.273-15.528l-10.407-27.952c-1.224-3.298-2.394-7.02-3.49-11.111c-0.212-0.769-0.416-1.555-0.61-2.351  l-0.038-0.149c-0.088-0.345-0.176-0.69-0.256-1.044l-0.025-0.106c-0.146-0.598-0.292-1.205-0.435-1.819l-0.174-0.771  c-0.197-0.837-0.386-1.675-0.57-2.559c-0.381-1.775-0.741-3.59-1.092-5.42c-0.175-0.911-0.339-1.832-0.506-2.773  c-0.165-0.923-0.33-1.863-0.48-2.774l-0.243-1.5c-0.156-0.956-0.302-1.912-0.446-2.862c-0.146-0.979-0.294-1.969-0.442-3.036  c-0.114-0.82-0.229-1.635-0.336-2.46l-0.056-0.442c-0.181-1.37-0.353-2.748-0.517-4.144l-0.044-0.385  c-0.116-1.001-0.233-2.002-0.341-3.03c-1.761-16.301-2.505-33.672-2.154-50.258c0.02-1.122,0.048-2.235,0.087-3.349l0.004-0.174  c0.038-1.188,0.076-2.377,0.135-3.592c0.547-13.139,1.84-24.949,3.741-34.156l6.397-30.985c0.726-3.515-1.536-6.953-5.051-7.679  H382.4c-3.515-0.726-6.952,1.535-7.678,5.05l-2.01,9.732c-8.531-14.377-20.117-21.214-27.57-24.307  c-2.729-1.132-6.918-2.133-10.496-2.861c-3.686-0.751-7.243,1.74-7.763,5.466l0,0c-0.475,3.402,1.776,6.59,5.145,7.266  c2.948,0.592,6.26,1.36,8.133,2.138c9.736,4.04,22.37,13.402,27.871,35.026c-1.585,8.137-2.741,17.935-3.392,28.672  c-59.046,8.439-113.319-10.2-126.501-15.223c-0.037-0.187-0.071-0.382-0.108-0.567c-0.214-1.047-0.427-2.074-0.649-3.12  c-0.318-1.456-0.479-2.943-0.479-4.422c0-4.527,1.521-9.01,4.277-12.614l5.099-6.653c2.184-2.849,1.644-6.929-1.206-9.111  l-0.002-0.003c-2.85-2.182-6.928-1.643-9.11,1.206l-5.103,6.658c-4.485,5.866-6.955,13.153-6.955,20.518  c0,2.411,0.263,4.833,0.771,7.159c0.206,0.974,0.413,1.967,0.612,2.944c1.392,7.023,2.558,15.197,3.468,24.294l0.021,0.192  c0.011,0.12,0.022,0.239,0.035,0.356c0.114,1.116,0.22,2.242,0.323,3.473c0.085,0.862,0.161,1.734,0.228,2.606l0.022,0.23  c0.02,0.182,0.031,0.363,0.052,0.631c0.117,1.418,0.225,2.856,0.322,4.305l0.014,0.162c0.01,0.111,0.023,0.228,0.028,0.339  l0.009,0.149c0.089,1.273,0.178,2.546,0.258,3.851c0.059,0.904,0.107,1.818,0.158,2.782c0.049,0.793,0.087,1.596,0.13,2.475  c0.047,0.779,0.084,1.559,0.112,2.338l0.006,0.111c0.068,1.274,0.116,2.56,0.165,3.853c0.172,4.469,0.288,8.902,0.346,13.203  c0.028,1.622,0.038,3.244,0.049,4.858l0.001,0.241c0.144,28.068-1.809,54.388-5.349,72.175l-0.116,0.57  c-1.284,6.436-4.785,12.273-9.854,16.434c-5.084,4.164-11.495,6.458-18.051,6.458c-8.096,0-15.561-3.295-21.019-9.276  c-5.46-5.985-8.06-13.723-7.316-21.819l0.57-6.545c0.712-8.236,1.037-17.917,0.964-28.824l-0.02-2.19  c-0.011-1.194-0.031-2.4-0.061-3.573l-0.003-0.161c-0.01-0.549-0.021-1.099-0.038-1.647c-0.011-0.71-0.03-1.421-0.052-2.148  c-0.051-1.713-0.102-3.427-0.172-5.146c-0.091-2.454-0.201-4.948-0.336-7.477l-0.047-0.872c-0.031-0.595-0.063-1.191-0.103-1.783  c-0.051-1.076-0.122-2.161-0.19-3.206c-0.057-0.956-0.121-1.912-0.187-2.868l-0.019-0.272c-0.162-2.287-0.334-4.574-0.523-6.85  c-0.082-1.041-0.164-2.083-0.266-3.124c-0.102-1.273-0.222-2.556-0.345-3.849c-0.183-1.902-0.374-3.814-0.58-5.749l-0.758-6.657  c-0.035-0.326-0.071-0.642-0.115-0.956c-0.091-0.792-0.191-1.584-0.302-2.376c-0.125-1.032-0.26-2.055-0.396-3.087l-0.02-0.148  c-0.253-1.865-0.517-3.722-0.789-5.563c-0.193-1.309-0.396-2.607-0.594-3.866c-0.144-0.96-0.299-1.909-0.461-2.895l-0.566-3.299  c-0.111-0.662-0.225-1.314-0.346-1.957c-0.038-0.233-0.082-0.466-0.129-0.691c-0.082-0.471-0.17-0.936-0.259-1.405l-0.054-0.286  c-0.217-1.178-0.445-2.347-0.676-3.479l-0.024-0.128c-0.109-0.553-0.219-1.105-0.323-1.593l-0.122-0.613  c-0.129-0.623-0.258-1.245-0.388-1.82c-0.192-0.88-0.385-1.75-0.56-2.527c-0.044-0.212-0.092-0.42-0.14-0.629l-0.109-0.487  c-0.177-0.769-0.354-1.538-0.53-2.249c-0.693-2.897-1.432-5.69-2.197-8.381c19.846-11.437,32.939-30.895,32.939-52.937  c0-1.142-0.051-2.286-0.124-3.431c0.081-2.066-0.131-4.168-0.669-6.248l-0.228-0.88c-0.535-2.828-1.278-5.628-2.191-8.374  c-0.182-0.61-0.385-1.211-0.617-1.796c-7.182-19.751-23.407-36.123-39.41-36.783c-6.772-0.271-11.543,2.211-15.754,4.406  c-4.226,2.204-7.88,4.109-14.269,4.109c-0.05,0-0.1,0-0.149-0.001c-6.545-0.029-10.239-2.021-14.517-4.327  c-4.063-2.19-8.65-4.663-15.081-4.663c-0.219,0-0.441,0.003-0.666,0.009C65.317,122.059,42.89,151.318,42.89,179.459z   M171.947,177.087c-1.14-2.35-3.741-3.75-6.329-3.4c-3.423,0.461-5.637,3.469-5.383,6.629l-3.485-1.463  c-2.85-1.196-4.994-3.773-5.342-6.845c-0.39-3.432,1.183-6.54,4.135-8.24l7.603-4.38c1.297-0.747,2.729-1.124,4.17-1.124  c1.435,0,2.877,0.374,4.2,1.129c2.019,1.15,3.398,3.166,3.98,5.415l1.813,7.003c0.245,1.388,0.426,2.783,0.542,4.185  c-0.199,2.081-1.17,4.016-2.85,5.47c-1.038,0.898-2.223,1.492-3.467,1.805C172.702,181.525,172.978,179.21,171.947,177.087z   M56.799,172.772l2.131-8.229v-0.001c0-0.776,0.234-1.541,0.685-2.175c1.954-2.754,4.7-4.104,7.428-4.104  c1.44,0,2.873,0.377,4.17,1.124l7.349,4.233c2.679,1.543,4.484,4.367,4.447,7.459c-0.042,3.453-1.991,6.341-5.132,7.659l-2.907,1.22  c0.026-1.192-0.28-2.428-1.044-3.582c-1.257-1.898-3.542-2.971-5.804-2.705c-3.968,0.466-6.361,4.337-5.246,7.969  c0.205,0.67,0.519,1.275,0.908,1.813c-1.715-0.215-3.354-0.964-4.719-2.253C56.803,179.064,56.02,175.784,56.799,172.772z   M120.523,201.784L120.523,201.784c-1.174,1.543-2.745,1.773-3.576,1.773c-0.832,0-2.403-0.23-3.577-1.772  c-1.525-2.004-0.823-3.968-0.451-4.72s1.511-2.5,4.028-2.5s3.656,1.748,4.028,2.5S122.049,199.781,120.523,201.784z   M123.447,229.853v-14.539c2.896-1.154,5.459-3.078,7.42-5.653l0,0c4.426-5.813,4.825-13.662,0.854-19.978  c-2.854-4.539-7.744-7.541-13.082-8.038c-7.95-0.74-15.226,3.787-18.069,11.255c-1.907,5.009-1.37,10.718,1.441,15.28  c2.049,3.325,5.01,5.769,8.437,7.134v13.213c-4.639-0.349-9.225-1.063-13.697-2.151l-0.14-0.033  c-0.301-0.065-0.602-0.139-0.895-0.219l-0.248-0.064c-0.171-0.042-0.346-0.082-0.517-0.135l-0.268-0.078  c-1.566-0.414-3.159-0.894-4.732-1.425l-0.128-0.041c-0.459-0.145-0.909-0.308-1.369-0.473c-0.394-0.141-0.78-0.28-1.26-0.465  l-0.167-0.062c-0.314-0.115-0.633-0.23-0.939-0.359l-0.182-0.074c-0.405-0.156-0.813-0.317-1.239-0.496  c-11.831-6.143-20.949-15.553-25.521-26.698c1.839,0.51,3.737,0.772,5.648,0.772c2.795,0,5.616-0.554,8.312-1.685l9.37-3.934  c7.103-2.981,12.337-9.404,13.343-17.041c1.148-8.726-2.992-17.03-10.516-21.363l-7.603-4.38c-2.607-1.502-5.429-2.414-8.308-2.735  c5.737-6.534,12.434-10.759,18.279-10.912c0.113-0.003,0.225-0.004,0.335-0.004c2.994,0,5.152,1.085,8.901,3.106  c4.826,2.602,10.832,5.839,20.626,5.884c0.069,0.001,0.138,0.001,0.206,0.001c9.577-0.001,15.51-3.094,20.282-5.582  c3.881-2.024,6.048-3.072,9.208-2.944c5.527,0.229,11.842,4.274,17.309,10.503c-2.73,0.362-5.403,1.256-7.882,2.684l-7.198,4.146  c-6.675,3.846-11.066,10.873-11.109,18.575c-0.049,8.8,5.096,16.521,13.101,19.882l9.802,4.113c2.695,1.132,5.516,1.686,8.312,1.686  c1.734,0,3.456-0.229,5.136-0.649C167.137,214.152,147.334,227.744,123.447,229.853z" />
                </AnimalsSvg>
                Zvířata
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#krajina">
                <svg
                  enable-background="new 0 0 512 512"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M241.168,189.241c-17.587,0-31.896-14.308-31.896-31.896c0-17.587,14.309-31.895,31.896-31.895s31.896,14.308,31.896,31.895  C273.063,174.934,258.755,189.241,241.168,189.241z M241.168,133.451c-13.176,0-23.896,10.719-23.896,23.895  s10.72,23.896,23.896,23.896s23.896-10.72,23.896-23.896S254.344,133.451,241.168,133.451z" />
                  <path d="M386.623,282.689l-87.313-95.118c-0.757-0.825-1.826-1.295-2.946-1.295h-0.001c-1.121,0-2.19,0.471-2.947,1.297  l-51.582,56.275l-71.243-80.767c-0.76-0.86-1.853-1.354-3-1.354s-2.24,0.493-3,1.354L62.877,278.392  c-1.461,1.657-1.303,4.185,0.354,5.646c0.761,0.671,1.705,1,2.645,1c1.108,0,2.211-0.457,3.002-1.354l98.713-111.908l90.072,102.112  c1.461,1.656,3.988,1.815,5.646,0.354c1.656-1.461,1.814-3.989,0.354-5.646l-16.508-18.715l49.211-53.688L380.73,288.1  c0.788,0.859,1.866,1.295,2.947,1.295c0.967,0,1.936-0.348,2.704-1.053C388.009,286.848,388.117,284.317,386.623,282.689z" />
                  <path d="M460.51,151.85H400.28v-63.49c0-2.21-1.79-4-4-4H51.49c-2.2,0-4,1.79-4,4V356.15c0,2.209,1.8,4,4,4h60.229v63.49  c0,2.209,1.79,4,4,4h344.79c2.2,0,4-1.791,4-4V155.85C464.51,153.64,462.71,151.85,460.51,151.85z M392.28,92.359v59.49v8v132.428  H55.49V92.359H392.28z M111.72,352.15H55.49v-51.873h336.79v51.873H119.72H111.72z M456.51,419.641H119.72v-59.49H396.28  c2.21,0,4-1.791,4-4V159.85h56.229V419.641z" />
                </svg>
                Krajina
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#mazlicci">
                <svg
                  enable-background="new 0 0 512 512"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M330.464,146.338l-15.656-8.151l-2.521-1.311l-13.135-6.84c-1.886-0.983-4.021,0.784-3.415,2.819l2.979,10.018   c2.72,9.133,12.449,14.196,21.484,11.188l1.945-0.655l7.973-2.661C332.132,150.08,332.35,147.311,330.464,146.338z" />
                    <path d="M379.828,142.873l2.979-10.018c0.605-2.035-1.529-3.803-3.415-2.819l-13.135,6.84l-2.521,1.311l-15.656,8.151   c-1.887,0.973-1.668,3.742,0.347,4.407l7.973,2.661l1.945,0.655C367.379,157.069,377.107,152.006,379.828,142.873z" />
                    <path d="M389.094,436.461l-13.221-70.964l8.119-25.334c7.406-23.107,5.834-47.897-4.427-69.813   c-0.104-0.236-0.216-0.471-0.319-0.686c-4.412-9.337-7.131-19.171-8.082-29.23l-4.361-46.03   c16.558-12.002,31.166-32.064,31.166-50.289c0-0.938-0.037-1.88-0.098-2.825h0.098V46.673l-6.676,3.705   c-1.023,0.569-23.105,13.1-32.238,38.769c-6.059-2.43-12.599-3.824-19.467-3.824c-6.869,0-13.408,1.395-19.467,3.824   c-9.133-25.669-31.216-38.199-32.239-38.769l-6.675-3.705v94.617h0.097c-0.06,0.945-0.097,1.888-0.097,2.825   c0,12.742,7.539,28.043,20.168,40.93c3.564,3.637,7.286,6.836,11.053,9.572c-3.861,28.237-21.217,52.796-46.842,66.058   l-44.261,22.918l-0.167,0.091c-30.309,17.361-49.137,49.666-49.137,84.308c0,17.682,4.785,34.275,13.138,48.582   c-31.296-18.042-51.275-51.542-51.037-87.758c0.198-31.004,14.346-59.719,38.817-78.783l35.679-27.815   c28.419-22.146,44.719-55.516,44.719-91.552c0-18.962-7.438-36.771-20.944-50.146c-13.501-13.37-31.338-20.605-50.347-20.446   c-38.543,0.372-69.901,32.418-69.901,71.437v6.75c0,4.691,1.827,9.096,5.131,12.388c3.305,3.316,7.708,5.144,12.4,5.144   c9.667,0,17.531-7.864,17.531-17.531v-7.595c0-9.61,3.792-18.619,10.676-25.368c6.882-6.745,15.925-10.361,25.589-10.161   c9.208,0.187,17.889,4.055,24.446,10.894c6.783,7.075,10.551,16.716,10.338,26.451c-0.536,24.424-11.906,47.053-31.196,62.084   l-35.68,27.807c-16.198,12.63-29.527,29.061-38.546,47.517c-9.012,18.451-13.775,39.067-13.775,59.619   c0,74.891,60.929,135.82,135.82,135.82h31.255v-0.098c1.368,0.057,2.743,0.092,4.125,0.092v-8.986   c-49.213,0-89.251-39.631-89.251-88.344c0-31.398,17.062-60.688,44.536-76.463l44.176-22.873   c27.018-13.983,45.687-39.381,50.975-68.828c6.602,3.508,13.096,5.421,18.895,5.421c5.719,0,12.192-2.02,18.695-5.487l3.934,41.521   c1.049,11.1,4.045,21.941,8.916,32.249c0.074,0.156,0.15,0.313,0.219,0.469l0.052,0.115c9.316,19.865,10.748,42.348,4.031,63.306   l-8.812,27.493l13.326,71.534h-8.703v8.987h17.316c6.925,0,12.796,4.596,14.723,10.898h-35.262l-28.172-80.771   c-3.2-29.654-28.375-52.82-58.865-52.82v8.986c27.696,0,50.229,22.533,50.229,50.229c0,3.109-0.283,6.203-0.852,9.242   c-0.049,0.277-0.105,0.556-0.157,0.817c-0.579,2.849-1.411,5.653-2.477,8.343c-2.806,7.131-7.316,13.646-13.09,18.882l-0.304,0.263   c-6.54,5.817-14.482,9.828-22.982,11.603c-3.38,0.716-6.867,1.079-10.367,1.079v8.987h34.445c9.296,0,17.105,6.481,19.145,15.161   h-36.334v8.987h45.839v-4.493c0-15.793-12.853-28.643-28.649-28.643h-3.083c2.798-1.75,5.455-3.737,7.937-5.944l0.09-0.078   c0.133-0.114,0.266-0.23,0.349-0.308c6.745-6.117,12.06-13.795,15.366-22.197c0.764-1.932,1.414-3.92,1.971-5.939l23.58,67.603   h51.301v-4.493C412.941,447.563,402.291,436.746,389.094,436.461z M228.71,456.175c-67.075-3.229-120.652-58.808-120.652-126.668   c0-19.19,4.448-38.441,12.862-55.669c8.422-17.233,20.868-32.575,35.993-44.368l35.679-27.806   c21.433-16.702,34.066-41.846,34.662-68.986c0.265-12.106-4.416-24.09-12.84-32.877c-8.223-8.576-19.147-13.429-30.762-13.663   c-12.052-0.235-23.446,4.28-32.07,12.732c-8.626,8.455-13.376,19.746-13.376,31.795v7.595c0,4.704-3.827,8.531-8.531,8.531   c-2.281,0-4.421-0.887-6.036-2.508c-1.609-1.603-2.496-3.742-2.496-6.023v-6.75c0-34.104,27.359-62.112,60.988-62.437   c16.553-0.185,32.145,6.175,43.927,17.842c11.786,11.671,18.277,27.208,18.277,43.75c0,33.242-15.036,64.023-41.252,84.454   l-35.678,27.814c-26.657,20.767-42.069,52.048-42.285,85.823c-0.296,45.148,28.191,86.411,70.976,102.997   C205.076,441.992,216.177,450.354,228.71,456.175z M388.98,62.943v51.933c-5.352-8.643-12.842-16.326-21.797-21.691   C372.152,78.466,382.241,68.363,388.98,62.943z M290.194,62.944c6.742,5.421,16.829,15.522,21.797,30.24   c-8.955,5.365-16.444,13.049-21.797,21.691V62.944z M339.588,196.261c-18.77,0-49.394-29.132-49.394-52.146   c0-22.56,22.032-49.806,49.394-49.806s49.393,27.246,49.393,49.806c0,10.382-6.656,23.327-17.807,34.628   C360.676,189.385,348.277,196.261,339.588,196.261z" />
                  </g>
                </svg>
                Mazlíčci
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#kontakt">
                <svg
                  enable-background="new 0 0 512 512"
                  id="Letter"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <g>
                        <path d="M371.518,232.8H38.647v50.149h10v-35.408L188.73,348.063c4.892,3.51,10.622,5.265,16.354,5.265     c5.73,0,11.463-1.755,16.354-5.265l57.081-40.961l-5.83-8.125l-57.081,40.962c-6.296,4.517-14.754,4.517-21.048-0.001     L59.191,242.8h291.782l-47.104,33.802l5.83,8.125l51.818-37.185v175.462l-108.436-84.558l-6.148,7.886l105.051,81.918H58.187     l105.044-81.918l-6.15-7.886L48.647,423.007V302.238h-10V438.25h332.87V232.8z" />
                        <rect
                          height="9.999"
                          transform="matrix(0.8124 -0.5831 0.5831 0.8124 -115.389 224.6395)"
                          width="13.326"
                          x="284.791"
                          y="286.665"
                        />
                      </g>
                      <g>
                        <rect
                          height="10"
                          width="26.478"
                          x="261.095"
                          y="137.745"
                        />
                        <rect
                          height="10"
                          width="144.608"
                          x="287.572"
                          y="177.808"
                        />
                        <rect
                          height="10"
                          width="171.086"
                          x="261.095"
                          y="205.304"
                        />
                        <rect
                          height="10"
                          width="42.512"
                          x="389.669"
                          y="232.8"
                        />
                        <rect
                          height="10"
                          width="42.636"
                          x="304.002"
                          y="137.745"
                        />
                        <rect
                          height="10"
                          width="42.512"
                          x="389.669"
                          y="356.078"
                        />
                        <rect
                          height="10"
                          width="42.512"
                          x="389.669"
                          y="379.412"
                        />
                        <path d="M205.443,118.265h-17.819v-16.7c0-9.826,7.994-17.819,17.819-17.819s17.819,7.993,17.819,17.819v113.181h10V101.564     c0-6.775-2.437-12.989-6.477-17.819h213.747c12.583,0,22.819,11.597,22.819,25.851v318.66h-73.684v9.999h83.684V109.596     c0-19.769-14.723-35.851-32.819-35.851h-235.09c-15.34,0-27.819,12.479-27.819,27.819v26.7h27.819V118.265z" />
                      </g>
                    </g>
                  </g>
                </svg>
                Kontakt
              </MenuLink>
            </MenuItem>
          </Menu>
        </Container>
      </Navbar>
      <main>
        <Intro id="uvod">
          <Container>
            <Avatar src={AvatarSrc} alt="Avatar" />
            <div>
              <Heading>
                Ahoj! Jmenuji se Káča a vítám vás na mém kreativním kousku
                internetu
              </Heading>
              <p>
                Jsem nadšená umělkyně, milovnice zvířat a vášnivá fotografka. Od
                malička mě fascinovala příroda a její krásy, což se odráží i v
                mých koníčcích a tvorbě. Zachycování krásy světa kolem nás
                prostřednictvím objektivu mi přináší radost. Nejraději fotím
                přírodu, květiny a zvířata v jejich přirozeném prostředí. Každý
                snímek je pro mě unikátní příběh, který se snažím sdílet s
                ostatními.
              </p>
              <p>
                Vedle fotografování se věnuji i malbě. Maluji olejomalby, které
                mi umožňují vyjádřit svou lásku k přírodě a zvířatům. Každý tah
                štětcem je pro mě cestou k zachycení okamžiku, který mě oslovil
                a inspiroval. Miluji barevné kontrasty a jemné detaily, které
                přinášejí mým obrazům život a hloubku.
              </p>
              <p>
                Ať už jde o umění, fotografii nebo lásku k přírodě, věřím, že
                sdílení zkušeností a inspirací nás všechny obohacuje. Ráda bych
                vás pozvala do svého světa a podělila se s vámi o své projekty,
                nápady a radosti, které mi přináší mé koníčky.
              </p>
            </div>
          </Container>
        </Intro>

        <AnimatedOnScroll>
          <Card href="/galerie/krajina" id="krajina">
            <div>
              <Heading>Krajina</Heading>
              <p>
                Fotografováním krajiny objevuji krásu světa kolem nás a
                uchovávám ji na snímcích. Při plánování výpravy si vždy pečlivě
                vybírám lokaci a studuji počasí, abych využila nejlepší světelné
                podmínky. Nejraději fotím při východu nebo západu slunce, kdy je
                světlo měkké a teplé, což dodává krajině magickou atmosféru.
              </p>
              <p>
                Během focení se soustředím na kompozici – hledám zajímavé prvky,
                které by mohly snímek ozvláštnit, jako jsou siluety stromů,
                skály nebo vodní plochy.
              </p>
              <p>
                Každá krajina má svůj jedinečný charakter a já se snažím
                zachytit její podstatu a atmosféru. Při focení mě fascinuje, jak
                světlo a stíny dokážou proměnit i známou scenérii v něco zcela
                nového a překvapivého.
              </p>
              <p>
                Fotografie krajiny mi přináší radost a inspiraci. Připomínají
                mi, jak rozmanitá a nádherná je naše planeta, a motivují mě k
                tomu, abych si jí vážila ještě více.
              </p>
              <CardButton>
                <span>Zobrazit galerii</span>
                <svg
                  version="1.1"
                  viewBox="0 0 91 91"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fill="#ff9999"
                      d="M8.1,53.5c18.4-1,36.9-2,55.4-2.4c-8.6,6.9-16,15.6-14.7,25.3c0.4,2.6,4.3,3.4,5.9,1.6   c4.4-4.9,7.1-10.6,12-15.3c5.3-5,11.3-8.9,17.6-12.5c1.7-1,2.5-2.4,2.6-4c0.4-1.9-0.3-4-2.6-5.5c-6-4-11.8-7.7-16.9-12.9   c-4.4-4.7-8.1-10-12-15.1c-2-2.7-6.9-1.3-5.8,2.4c2.3,8.2,7.5,17,14.1,24.1c-18.5-0.5-37.2,0.4-55.6,1.3   C-0.3,40.9-0.3,53.9,8.1,53.5z"
                    />
                  </g>
                </svg>
              </CardButton>
            </div>
            <Photo src={LandscapeSrc} alt="Landscape" />
          </Card>
        </AnimatedOnScroll>

        <AnimatedOnScroll>
          <Card href="/galerie/zvirata" id="zvirata">
            <Photo src={AnimalSrc} alt="Swan" />
            <div>
              <Heading>Zvířata</Heading>
              <p>
                Fotografování zvířat je pro mě nádherným způsobem, jak se
                propojit s přírodou a zachytit jedinečné okamžiky v jejich
                životě.
              </p>
              <p>
                Zásadně vyrážím fotit brzy ráno, kdy jsou zvířata nejaktivnější
                a barvy přírody jsou nejvýraznější. Trpělivost je klíčová –
                často trávím hodiny čekáním na ten správný moment. Při focení se
                snažím respektovat jejich prostor a chovat se tiše, abych je
                nevyděsila.
              </p>
              <p>
                Každé setkání je jiné a pokaždé mě překvapí, jak rozmanité a
                krásné jsou detaily zvířecího světa. Každý snímek vypráví svůj
                vlastní příběh a já se snažím zachytit tu magii okamžiku.
                Fotografie zvířat mě nejen naplňují radostí, ale také mi
                připomínají, jak důležité je chránit naši přírodu a její
                obyvatele.
              </p>
              <CardButton>
                <span>Zobrazit galerii</span>
                <svg
                  version="1.1"
                  viewBox="0 0 91 91"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fill="#ff9999"
                      d="M8.1,53.5c18.4-1,36.9-2,55.4-2.4c-8.6,6.9-16,15.6-14.7,25.3c0.4,2.6,4.3,3.4,5.9,1.6   c4.4-4.9,7.1-10.6,12-15.3c5.3-5,11.3-8.9,17.6-12.5c1.7-1,2.5-2.4,2.6-4c0.4-1.9-0.3-4-2.6-5.5c-6-4-11.8-7.7-16.9-12.9   c-4.4-4.7-8.1-10-12-15.1c-2-2.7-6.9-1.3-5.8,2.4c2.3,8.2,7.5,17,14.1,24.1c-18.5-0.5-37.2,0.4-55.6,1.3   C-0.3,40.9-0.3,53.9,8.1,53.5z"
                    />
                  </g>
                </svg>
              </CardButton>
            </div>
          </Card>
        </AnimatedOnScroll>

        <AnimatedOnScroll>
          <Card href="/galerie/mazlicci" id="mazlicci">
            <div>
              <Heading>Mazlíčci</Heading>
              <p>
                Fotografování domácích mazlíčků je radostnou a zábavnou
                činností, která mi umožňuje zachytit jejich osobitý charakter a
                radostné momenty.
              </p>
              <p>
                Používám různé rekvizity, hračky a pamlsky, abych upoutala
                jejich pozornost a vyvolala u nich různé výrazy a pózy. Ráda
                fotím v přirozeném světle, nejlépe venku v přírodě nebo na
                zahradě, aby byly snímky co nejvíce autentické a plné života.
              </p>
              <p>
                Každý mazlíček je jiný a já se snažím vystihnout jejich
                jedinečnou osobnost. Trpělivost je klíčová, protože mazlíčci
                mají svou vlastní hlavu a často neposedí na místě. Ale právě to
                dělá focení tak zábavným a nevyzpytatelným.
              </p>
              <p>
                Výsledné fotografie nejsou jen obrázky, ale vzpomínky na
                společné chvíle plné lásky a radosti. Když se na ně podívám,
                vždycky mě zahřeje u srdce, jak moc mi mazlíčci přinášejí radost
                a jaký význam mají v životě lidí.
              </p>
              <CardButton>
                <span>Zobrazit galerii</span>
                <svg
                  version="1.1"
                  viewBox="0 0 91 91"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fill="#ff9999"
                      d="M8.1,53.5c18.4-1,36.9-2,55.4-2.4c-8.6,6.9-16,15.6-14.7,25.3c0.4,2.6,4.3,3.4,5.9,1.6   c4.4-4.9,7.1-10.6,12-15.3c5.3-5,11.3-8.9,17.6-12.5c1.7-1,2.5-2.4,2.6-4c0.4-1.9-0.3-4-2.6-5.5c-6-4-11.8-7.7-16.9-12.9   c-4.4-4.7-8.1-10-12-15.1c-2-2.7-6.9-1.3-5.8,2.4c2.3,8.2,7.5,17,14.1,24.1c-18.5-0.5-37.2,0.4-55.6,1.3   C-0.3,40.9-0.3,53.9,8.1,53.5z"
                    />
                  </g>
                </svg>
              </CardButton>
            </div>
            <Photo src={PetSrc} alt="Kočka" />
          </Card>
        </AnimatedOnScroll>
      </main>
      <AnimatedOnScroll>
        <ContactBlock></ContactBlock>
      </AnimatedOnScroll>
    </>
  );
}
