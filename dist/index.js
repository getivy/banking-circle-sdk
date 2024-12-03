"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.testing_webhooks_sandbox_only_v1_0 = exports.virtual_banking_v1_0 = exports.reporting_and_reconciliation_v1_0 = exports.request_to_pay_v1_0 = exports.fx_v1_0 = exports.fees_v1_0 = exports.direct_debit_v1_0 = exports.authorization_v1_0 = exports.webhooks_v1_0 = exports.payment_v1_0 = exports.accounts_and_balances_v1_0 = void 0;
exports.accounts_and_balances_v1_0 = __importStar(require("./types/accounts_and_balances_v1_0"));
exports.payment_v1_0 = __importStar(require("./types/payment_v1_0"));
exports.webhooks_v1_0 = __importStar(require("./types/webhooks_v1_0"));
exports.authorization_v1_0 = __importStar(require("./types/authorization_v1_0"));
exports.direct_debit_v1_0 = __importStar(require("./types/direct_debit_v1_0"));
exports.fees_v1_0 = __importStar(require("./types/fees_v1_0"));
exports.fx_v1_0 = __importStar(require("./types/fx_v1_0"));
exports.request_to_pay_v1_0 = __importStar(require("./types/request_to_pay_v1_0"));
exports.reporting_and_reconciliation_v1_0 = __importStar(require("./types/reporting_and_reconciliation_v1_0"));
exports.virtual_banking_v1_0 = __importStar(require("./types/virtual_banking_v1_0"));
exports.testing_webhooks_sandbox_only_v1_0 = __importStar(require("./types/testing_webhooks_sandbox_only_v1_0"));
