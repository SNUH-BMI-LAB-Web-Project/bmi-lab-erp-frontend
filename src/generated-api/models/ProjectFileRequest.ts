/* tslint:disable */
/* eslint-disable */
/**
 * BMI-LAB Web API
 * BMI-LAB을 관리하기 위한 웹 서비스
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProjectFileRequest
 */
export interface ProjectFileRequest {
    /**
     * 연구 첨부파일 URL
     * @type {string}
     * @memberof ProjectFileRequest
     */
    fileUrl?: string;
}

/**
 * Check if a given object implements the ProjectFileRequest interface.
 */
export function instanceOfProjectFileRequest(value: object): value is ProjectFileRequest {
    return true;
}

export function ProjectFileRequestFromJSON(json: any): ProjectFileRequest {
    return ProjectFileRequestFromJSONTyped(json, false);
}

export function ProjectFileRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectFileRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'fileUrl': json['fileUrl'] == null ? undefined : json['fileUrl'],
    };
}

export function ProjectFileRequestToJSON(json: any): ProjectFileRequest {
    return ProjectFileRequestToJSONTyped(json, false);
}

export function ProjectFileRequestToJSONTyped(value?: ProjectFileRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fileUrl': value['fileUrl'],
    };
}

