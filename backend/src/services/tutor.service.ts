import { prisma } from '../lib/prisma';
import { Tutor } from '../models/tutor.model';

export class TutorService {
  static async getAllTutors(): Promise<Tutor[]> {
    try {
      const tutors = await prisma.tutor.findMany({
        include: {
          pets: true,
        },
      });
      return tutors;
    } catch (error) {
      console.error('Erro ao buscar tutores:', error);
      throw new Error('Erro ao buscar tutores');
    }
  }

  static async createTutor(tutorData: Omit<Tutor, 'id'>): Promise<Tutor> {
    try {
      const newTutor = await prisma.tutor.create({
        data: tutorData,
        include: {
          pets: true,
        },
      });
      return newTutor;
    } catch (error) {
      console.error('Erro ao criar tutor:', error);
      throw new Error('Erro ao criar tutor');
    }
  }

  static async getTutorById(id: number): Promise<Tutor | null> {
    try {
      const tutor = await prisma.tutor.findUnique({
        where: { id },
        include: {
          pets: true,
        },
      });
      return tutor;
    } catch (error) {
      console.error('Erro ao buscar tutor:', error);
      throw new Error('Erro ao buscar tutor');
    }
  }

  static async updateTutor(id: number, tutorData: Partial<Omit<Tutor, 'id'>>): Promise<Tutor | null> {
    try {
      const updatedTutor = await prisma.tutor.update({
        where: { id },
        data: tutorData,
        include: {
          pets: true,
        },
      });
      return updatedTutor;
    } catch (error) {
      console.error('Erro ao atualizar tutor:', error);
      throw new Error('Erro ao atualizar tutor');
    }
  }

  static async deleteTutor(id: number): Promise<boolean> {
    try {
      await prisma.tutor.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      console.error('Erro ao deletar tutor:', error);
      throw new Error('Erro ao deletar tutor');
    }
  }
}