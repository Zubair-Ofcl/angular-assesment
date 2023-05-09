import { BaseModel } from './index';

export enum AutoResponderType {
  SMS = 1,
  Email = 2
}

export interface Response extends BaseModel {
  delay: number;
}

export interface EmailResponse extends Response {
  template: string | number;
  template_after_hours: string | number;
}

export interface SMSResponse extends Response {
  message: string;
  message_after_hours: string;
}

export interface AutoResponder extends BaseModel {
  name: string;
  type: AutoResponderType;
  responses: Response[];
  campaign: string | number;
}

export enum AutoResponderTrigger {
  SESSION_NOT_STARTED = 1,
  NO_STEPS = 2,
  LOW_NUMBER_OF_STEPS = 3,
  ERROR = 4,
}

export interface CampaignAutoResponderTrigger {
  campaign: string | number;
  autoresponder: string | number;
  trigger_type: number;
  autoresponder_type: AutoResponderType.SMS | AutoResponderType.Email
}

export const CampaignAutoResponderTriggersList = [
  'Session not started',  // 0
  'Session started but no steps taken',  // 1
  `Session started but less than ${AutoResponderTrigger.LOW_NUMBER_OF_STEPS} steps taken`,  // 2
  'Error occurred while executing an action',  // 3
]
