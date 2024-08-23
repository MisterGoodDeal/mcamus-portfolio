export interface Skill {
  id: number;
  name: string;
  image: string;
  created_at: string;
}

export interface SkillCreate extends Pick<Skill, "name" | "image"> {}

export interface SkillUpdate extends Partial<Omit<SkillCreate, "id">> {}

export interface SkillDelete {
  id: number;
}
