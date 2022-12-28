import React from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <div className="max-w-xl my-4 rounded-xl border bg-gray-100 px-4 py-6 shadow-xl">
      <RocketLaunchIcon className="flex-shrink-0 h-12 w-12 text-orange-600" />
      <h1 className="mt-3 text-xl font-bold text-gray-800">About</h1>

      <p className="mt-4 text-sm text-gray-600">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-orange-700">
          methical
        </span>
        &nbsp; (<em>/mēTHək(ə)l/</em>) generates an imaginary profile of a
        person that does not exist, with the use of open-source machine learning
        models. The models are hosted in HuggingFace, and predictions are
        accessed through their Inference API.
      </p>
      <h2 className="my-2 text-lg font-bold text-gray-800">Models</h2>
      <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 text-sm">
        <li>
          GPT-J 6B (
          <a
            href="https://github.com/kingoflolz/mesh-transformer-jax"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-purple-500 hover:no-underline hover:text-purple-500 hover:decoration-purple-600"
          >
            Wang et al., 2021
          </a>
          )
        </li>
        <li>
          StyleGAN2 (
          <a
            href="https://arxiv.org/abs/1912.04958"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-purple-500 hover:no-underline hover:text-purple-500 hover:decoration-purple-600"
          >
            Karras et al., 2020
          </a>
          )
        </li>
        <li>
          Stable Diffusion (
          <a
            href="https://ommer-lab.com/research/latent-diffusion-models/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-purple-500 hover:no-underline hover:text-purple-500 hover:decoration-purple-600"
          >
            Rombach et al., 2022
          </a>
          )
        </li>
      </ul>
    </div>
  );
};

export default About;
