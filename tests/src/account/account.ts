import "allocator/arena";
import { Account, NAME } from "../../../src/account";
import { Contract } from "../../../src/contract";
import { Log } from "../../../src/log";

class AccountContract extends Contract {

    @action
    test(): void {
        ultrain_assert(Account.codeStatus(this.receiver) == 1, "this.receiver must deployed to some smart contract.");
        ultrain_assert(Account.codeStatus(NAME("messi")) == 0, "messi must not deployed to some smart contract.");
        ultrain_assert(Account.codeStatus(NAME("aabbccddee")) == -1, "invalid account name.");
    }
}