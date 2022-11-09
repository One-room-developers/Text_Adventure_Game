import { Check, Column, Entity, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { UserEpisodeEntity } from './userEpisode.entity';
import { MainEpisodeEntity } from './mainEpisode.entity';

@Entity('OptionText')
export class OptionTextEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, default: '' })
  mainText: string;

  @Column({ default: 0 })
  healthChange: number;

  @Column({ default: 0 })
  hungryChange: number;
  
  @Column({ default: 0 })
  moneyChange: number;
  
  @Column({ default: 0 })
  strengthChange: number;
  
  @Column({ default: 0 })
  agilityChange: number;
  
  @Column({ default: 0 })
  armorChange: number;
  
  @Column({ default: 0 })
  mentalChange: number;

  @ManyToOne( type => MainEpisodeEntity, mainepisodeentity => mainepisodeentity.optionTexts )
  mainEpisode: MainEpisodeEntity;

  @RelationId((optiontextentity: OptionTextEntity) => optiontextentity.mainEpisode)
  mainEpisodeId: number

  @ManyToOne( type => UserEpisodeEntity, UserEpisodeEntity => UserEpisodeEntity.options)
  userEpisode: UserEpisodeEntity;
}