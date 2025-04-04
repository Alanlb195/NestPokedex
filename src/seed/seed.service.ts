import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PokeResponse } from './interaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) { }

  async executeSeed() {
    await this.pokemonModel.deleteMany();

    const pokeResponse = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=20');

    const pokemonToInsert: { name: string, no: number }[] = [];

    pokeResponse.results.forEach(({ name, url }) => {

      const segments = url.split('/');

      const no: number = +segments[segments.length - 2]

      pokemonToInsert.push(({ name, no }));

    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
  }

}
