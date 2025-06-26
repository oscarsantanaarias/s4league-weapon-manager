function getPlasmaSword(newID){
	return `
	<lua_func item_key="${newID}" state="right_attack" weapon="StandardPlasmaSwordAttack2" ani="UseWeapon2State_PlasmaSword"/>
	<lua_func item_key="${newID}" state="left_weak" weapon="StandardPlasmaSwordStandAttack_Weak" ani="SwordAtkWeakState_PlasmaSword"/>
	<lua_func item_key="${newID}" state="left_strong1" weapon="StandardPlasmaSwordStandAttack_Strong" ani="SwordAtkStrongState_PlasmaSword"/>
	<lua_func item_key="${newID}" state="left_jump" weapon="StandardPlasmaSwordJumpAttack" ani="SwordJumpAtkState_PlasmaSword"/>
	<lua_func item_key="${newID}" state="left_strong2" weapon="StandardPlasmaSwordStandAttack_Strong1" ani="SwordAtkStrong1State_PlasmaSword"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_PlasmaSword"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_PlasmaSword"/>
    <lua_func item_key="${newID}" state="damage" ani="DamageState_PlasmaSword"/>
	`;
}

function getCounterSword(newID){
	 return ` 
	<lua_func item_key="${newID}" state="left_weak" weapon="StandardCounterSwordAfterDash1" ani="SwordAtkAfterDash1State_CounterSword"/>
	<lua_func item_key="${newID}" state="left_strong1" weapon="StandardCounterSwordCounterAttack" ani="SwordAtkCounterAttack_CounterSword"/>
	<lua_func item_key="${newID}" state="left_jump" weapon="StandardCounterSwordJumpDash" ani="SwordJumpAtkState_CounterSword"/>
	<lua_func item_key="${newID}" state="left_attack2" weapon="StandardCounterSwordAfterDash2" ani="SwordAtkAfterDash2State_CounterSword"/>
	<lua_func item_key="${newID}" state="left_attack3" weapon="StandardCounterSwordAfterDash3" ani="SwordAtkAfterDash3State_CounterSword"/>
	<lua_func item_key="${newID}" state="left_attack4" weapon="StandardCounterSwordAfterDash4" ani="SwordAtkAfterDash4State_CounterSword"/>
	<lua_func item_key="${newID}" state="counter_attack" weapon="StandardCounterSwordCounterAttack" ani="SwordAtkCounterAttack_CounterSword"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_CounterSword"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_CounterSword"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_CounterSword"/>
	<lua_func item_key="${newID}" state="right_attack" ani="UseWeapon2State_CounterSwordGuard"/>
`;

}


function getBat(newID){
	return `
    <lua_func item_key="${newID}" state="right_attack" weapon="StandardBatSwordAttack2" ani="UseWeapon2State_BatSword"/>
	<lua_func item_key="${newID}" state="left_weak" weapon="StandardBatSwordStandAttack_Strong" ani="SwordAtkStrongState_BatSword"/>
	<lua_func item_key="${newID}" state="left_strong1" weapon="StandardBatSwordStandAttack_Strong" ani="SwordAtkStrongState_BatSword"/>
	<lua_func item_key="${newID}" state="left_jump" weapon="StandardBatSwordJumpAttack" ani="SwordJumpAtkState_BatSword"/>
	<lua_func item_key="${newID}" state="left_strong2" weapon="StandardBatSwordStandAttack_Strong1" ani="SwordAtkStrong1State_BatSword"/>
	<lua_func item_key="${newID}" state="left_attack2" weapon="StandardBatSwordAttack2_2" ani="UseWeapon1Attack2State_BatSword"/>
	<lua_func item_key="${newID}" state="left_attack3" weapon="StandardBatSwordAttack2_3" ani="UseWeapon1Attack3State_BatSword"/>
	<lua_func item_key="${newID}" state="left_attack4" weapon="StandardBatSwordAttack2_4" ani="UseWeapon1Attack4State_BatSword"/>
	<lua_func item_key="${newID}" state="left_attack5" weapon="StandardBatSwordAttack2_5" ani="UseWeapon1Attack5State_BatSword"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_BatSword"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_BatSword"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_BatSword"/>
`;
}

function getKatana(newID){
	return `
    <lua_func item_key="${newID}" state="damage" ani="DamageState_KatanaSword"/>
	<lua_func item_key="${newID}" state="right_attack" weapon="StandardKatanaSwordAttack2" ani="UseWeapon2State_KatanaSword"/>
	<lua_func item_key="${newID}" state="left_weak" weapon="StandardKatanaSwordAttack1" ani="UseWeapon1State_KatanaSword"/>
	<lua_func item_key="${newID}" state="left_jump" weapon="StandardKatanaSwordJumpAttack" ani="SwordJumpAtkState_KatanaSword"/>
	<lua_func item_key="${newID}" state="left_attack2" weapon="StandardKatanaSwordAttack3" ani="SwordAtkAfterDash2State_KatanaSword"/>
	<lua_func item_key="${newID}" state="left_attack3" weapon="StandardKatanaSwordAttack7" ani="SwordAtkAfterDash3State_KatanaSword"/>
	<lua_func item_key="${newID}" state="left_attack4" weapon="StandardKatanaSwordAttack4" ani="SwordAtkAfterDash4State_KatanaSword"/>
	<lua_func item_key="${newID}" state="left_attack5" weapon="StandardKatanaSwordAttack5" ani="SwordAtkAfterDash5State_KatanaSword"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_KatanaSword"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_KatanaSword"/>
`;
}

function getVitalClaw(newID){
	return `
    <lua_func item_key="${newID}" state="normal" ani="NormalState_AssassinClaw"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_AssassinClaw"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_AssassinClaw"/>
	<lua_func item_key="${newID}" state="left_attack" weapon="StandardAssassinclaw" ani="UseWeapon1State_AssassinClaw"/>
`;
}

function getDagger(newID){
	return `
    <lua_func item_key="${newID}" state="right_attack" weapon="StandardSpyDaggerAttack2" ani="UseWeapon2State_SpyDagger"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_SpyDagger"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_SpyDagger"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_SpyDagger"/>
	<lua_func item_key="${newID}" state="left_attack" weapon="StandardSpyDaggerAttack1" ani="UseWeapon1State_SpyDagger"/>
`;
}

function getTwinBlades(newID){
	return `
    <lua_func item_key="${newID}" state="right_attack" weapon="StandardDoubleSwordAfterDash5" ani="UseWeapon2State_Double"/>
	<lua_func item_key="${newID}" state="left_weak" weapon="StandardDoubleSwordAfterDash1" ani="SwordAtkAfterDash1State_DoubleSword"/>
	<lua_func item_key="${newID}" state="left_strong1" weapon="StandardDoubleSwordAfterDash1" ani="SwordAtkAfterDash1State_DoubleSword"/>
	<lua_func item_key="${newID}" state="left_jump" weapon="StandardDoubleSwordJumpDash" ani="SwordJumpAtkState_DoubleSword"/>
	<lua_func item_key="${newID}" state="left_attack2" weapon="StandardDoubleSwordAfterDash2" ani="SwordAtkAfterDash2State_DoubleSword"/>
	<lua_func item_key="${newID}" state="left_attack3" weapon="StandardDoubleSwordAfterDash3" ani="SwordAtkAfterDash3State_DoubleSword"/>
	<lua_func item_key="${newID}" state="left_attack4" weapon="StandardDoubleSwordAfterDash4" ani="SwordAtkAfterDash4State_DoubleSword"/>
	<lua_func item_key="${newID}" state="left_attack5" weapon="StandardDoubleSwordGatherGuage" ani="SwordAtkAfterDash5State_DoubleSword"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_DoubleSword"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_DoubleSword"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_DoubleSword"/>
`;
}


function getBreaker(newID){
	return `
    <lua_func item_key="${newID}" state="right_attack" weapon="StandardBreakerAfterDash5" ani="UseWeapon2State_Breaker"/>
	<lua_func item_key="${newID}" state="left_weak" weapon="StandardBreakerAfterDash1" ani="SwordAtkAfterDash1State_Breaker"/>
	<lua_func item_key="${newID}" state="left_strong1" weapon="StandardBreakerStandAttack_Strong" ani="SwordAtkStrongState_Breaker"/>
	<lua_func item_key="${newID}" state="left_jump" weapon="StandardBreakerJumpDash" ani="SwordJumpAtkState_Breaker"/>
	<lua_func item_key="${newID}" state="left_attack4" weapon="StandardBreakerAfterDash4" ani="SwordAtkAfterDash4State_Breaker"/>
	<lua_func item_key="${newID}" state="left_attack5" weapon="StandardBreakerGatherGuage" ani="SwordAtkAfterDash5State_Breaker"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_Breaker"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_Breaker"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_Breaker"/>
`;
}


function getSigmaBlade(newID){
	return `
    <lua_func item_key="${newID}" state="left_weak" weapon="StandardSigmaBladeAfterDash1" ani="SwordAtkAfterDash1State_SigmaBlade"/>
	<lua_func item_key="${newID}" state="left_strong1" weapon="StandardSigmaBladeCounterAttack" ani="SwordAtkCounterAttack_SigmaBlade"/>
	<lua_func item_key="${newID}" state="left_jump" weapon="StandardSigmaBladeJumpDash" ani="SwordJumpAtkState_SigmaBlade"/>
	<lua_func item_key="${newID}" state="left_attack2" weapon="StandardSigmaBladeAfterDash2" ani="SwordAtkAfterDash2State_SigmaBlade"/>
	<lua_func item_key="${newID}" state="left_attack3" weapon="StandardSigmaBladeAfterDash3" ani="SwordAtkAfterDash3State_SigmaBlade"/>
	<lua_func item_key="${newID}" state="left_attack4" weapon="StandardSigmaBladeAfterDash4" ani="SwordAtkAfterDash4State_SigmaBlade"/>
	<lua_func item_key="${newID}" state="counter_attack" weapon="StandardSigmaBladeCounterAttack" ani="SwordAtkCounterAttack_SigmaBlade"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_SigmaBlade"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_SigmaBlade"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_SigmaBlade"/>
	<lua_func item_key="${newID}" state="right_attack" weapon="StandardSigmaBladeWeaponChange" ani="UseWeapon2State_SigmaBladeWeaponChange"/>
`;
}


function getExo(newID){
	return `
    <lua_func item_key="${newID}" state="left_weak" weapon="BasicAttackByDeathScythe_1" ani="FirstBasicAttack_DEATHSCYTHE"/>
	<lua_func item_key="${newID}" state="left_strong1" weapon="SpecialAttackByDeathScythe" ani="SpecialAttack_DEATHSCYTHE"/>
	<lua_func item_key="${newID}" state="left_jump" weapon="JumpAttackByDeathScythe" ani="JumpAttack_DEATHSCYTHE"/>
	<lua_func item_key="${newID}" state="left_attack2" weapon="BasicAttackByDeathScythe_2" ani="SecondBasicAttack_DEATHSCYTHE"/>
	<lua_func item_key="${newID}" state="left_attack3" weapon="BasicAttackByDeathScythe_3" ani="ThirdBasicAttack_DEATHSCYTHE"/>
	<lua_func item_key="${newID}" state="right_attack" weapon="UpperCutByDeathScythe" ani="StrongUpperCutAttack_DEATHSCYTHE"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_DeathScythe"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_DEATH_SCYTHE"/>
	<lua_func item_key="${newID}" state="damage" ani="Damage_DEATH_SCYTHE"/>
`;
}


function getIronBoots(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="IRONBOOTS_Dash_Kick_Attack" ani="ANI_IRONBOOTS_Dash_Kick_Attack"/>
	<lua_func item_key="${newID}" state="left_weak" weapon="IRONBOOTS_First_Kick_Attack" ani="ANI_IRONBOOTS_First_Kick_Attack"/>
	<lua_func item_key="${newID}" state="left_strong1" weapon="IRONBOOTS_Upper_Kick_Attack" ani="ANI_IRONBOOTS_Upper_Kick_Attack"/>
	<lua_func item_key="${newID}" state="left_jump" weapon="IRONBOOTS_Jump_Smash_Kick_Attack" ani="ANI_IRONBOOTS_Jump_Smash_Kick_Attack"/>
	<lua_func item_key="${newID}" state="left_attack2" weapon="IRONBOOTS_Second_Kick_Attack" ani="ANI_IRONBOOTS_Second_Kick_Attack"/>
	<lua_func item_key="${newID}" state="left_attack3" weapon="IRONBOOTS_Third_Kick_Attack" ani="ANI_IRONBOOTS_Third_Kick_Attack"/>
	<lua_func item_key="${newID}" state="left_attack4" weapon="IRONBOOTS_Fourth_Kick_Attack" ani="ANI_IRONBOOTS_Fourth_Kick_Attack"/>
	<lua_func item_key="${newID}" state="right_attack" weapon="IRONBOOTS_Boost_Dash_Attack" ani="ANI_IRONBOOTS_Boost_Dash_Attack"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_IRONBOOTS"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_IRONBOOTS"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_IRONBOOTS"/>
`;

}

function getFist(newID){
	return `
    <lua_func item_key="${newID}" state="left_weak" weapon="LeftAttack_DemonicKnuckle" ani="ANI_LeftAttack_DemonicKnuckle"/>
	<lua_func item_key="${newID}" state="left_attack2" weapon="LeftAttack2_DemonicKnuckle" ani="ANI_LeftAttack2_DemonicKnuckle"/>
	<lua_func item_key="${newID}" state="left_jump" weapon="LeftJump_DemonicKnuckle" ani="ANI_LeftJump_DemonicKnuckle"/>
	<lua_func item_key="${newID}" state="right_attack" weapon="RightAttack_DemonicKnuckle" ani="ANI_RightAttack_DemonicKnuckle"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_DemonicKnuckle"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_DemonicKnuckle"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_DemonicKnuckle"/>
`;
}


//All gun weapons start here!!

function getSubmachine(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardSubmachine" ani="UseWeapon1State_SubMachineGunAttack"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_SubMachineGun"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_SubMachineGun"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_SubMachineGun"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_SubMachineGun"/>
`;
}


function getRevolver(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardRevolver" ani="UseWeapon1State_Revolver"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_Revolver"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_Revolver"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_Revolver"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_Revolver"/>
`;
}

function getHandGun(newID){
	return `
	<lua_func item_key="${newID}" state="left_attack" weapon="StandardRevolver2" ani="UseWeapon1State_Revolver2"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_Revolver2"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_Revolver2"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_Revolver2"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_Revolver2"/>
	`;
}


function getSemiRifle(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardSmg2" ani="UseWeapon1State_SMG2"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_SMG2"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_SMG2"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_SMG2"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_SMG2"/>
`;
}


function getSmash(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardSmg3gun" ani="UseWeapon1State_SMG3Gun"/>
	<lua_func item_key="${newID}" state="right_weak" weapon="StandardSmg3sword" ani="UseWeapon2WeakState_SMG3Sword"/>
	<lua_func item_key="${newID}" state="right_strong" weapon="StandardSmg3sword" ani="UseWeapon2StrongState_SMG3Sword"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_SMG3"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_SMG3"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_SMG3"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_SMG3"/>
`;
}


function getShotGun(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardSmg4" ani="UseWeapon1State_SMG4"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_SMG4"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_SMG4"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_SMG4"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_SMG4"/>
`;
}

function getHoming(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardSmg2Homing" ani="UseWeapon1State_HOMING_RIFLE"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_HOMING_RIFLE"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_HOMING_RIFLE"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_HOMING_RIFLE"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_HOMING_RIFLE"/>
`;
}

function getAirGun(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardAirgun" ani="UseWeapon1State_AIRGUN"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_AIRGUN"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_AIRGUN"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_AIRGUN"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_AIRGUN"/>
`;
}


function getSparkRifle(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardSparkRifle" ani="UseWeapon1State_SPARK_RIFLE"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_SPARK_RIFLE"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_SPARK_RIFLE"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_SPARK_RIFLE"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_SPARK_RIFLE"/>
`;
}


function getAssault(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardClassicRifle" ani="UseWeapon1State_ASSULT_RIFLE"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_ASSULT_RIFLE"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_ASSULT_RIFLE"/>
`;
}


function getDualMagnum(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="RenewalDualMagnum_SHOT" ani="Attack_NORMAL_RenewalDualMagnum"/>
	<lua_func item_key="${newID}" state="left_weak" weapon="RenewalDualMagnum_SHOT" ani="Attack_NORMAL_RenewalDualMagnum"/>
	<lua_func item_key="${newID}" state="left_strong1" weapon="RenewalDualMagnum_SHOT" ani="Attack_NORMAL_RenewalDualMagnum"/>
	<lua_func item_key="${newID}" state="left_jump" weapon="RenewalDualMagnum_JUMP_SHOT" ani="Attack_JUMP_RenewalDualMagnum"/>
	<lua_func item_key="${newID}" state="left_attack2" weapon="StandardDualgunAfterDash2" ani="UseWeapon2State_DualGunAttack"/>
	<lua_func item_key="${newID}" state="left_attack3" weapon="StandardDualgunAfterDash3" ani="UseWeapon3State_DualGunAttack"/>
	<lua_func item_key="${newID}" state="right_attack" weapon="RenewalDualMagnum_ROLLING_SHOT" ani="Attack_ROLLING_RenewalDualMagnum"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_DualGun"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_DualGun"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_DualGun"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_DualGun"/>
`;
}


function getHeavyMachineGun(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardMachinegun" ani="UseWeapon1State_MachineGunAttack"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_MachineGun"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_MachineGun"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_MachineGun"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_MachineGun"/>
`;
}


function getGauss(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardMg2" ani="UseWeapon1State_MG2"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_MG2"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_MG2"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_MG2"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_MG2"/>
`;
}

function getTurrent(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="Standardturret" ani="UseWeapon1State_TURRET"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_TURRET"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_TURRET"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_TURRET"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_TURRET"/>
	<lua_func item_key="${newID}" state="normalinstall" ani="NormalState_TURRETINSTALL"/>
	<lua_func item_key="${newID}" state="reloadinstall" ani="ReloadState_TURRETINSTALL"/>
	<lua_func item_key="${newID}" state="left_attack_install" weapon="StandardturretInstall" ani="UseWeapon1State_TURRETINSTALL"/>
	<lua_func item_key="${newID}" state="right_attack_install" weapon="StandardTurretToNormal" ani="Reload2State_TURRETINSTALL"/>
	<lua_func item_key="${newID}" state="right_attack" weapon="StandardTurretToInstall" ani="Reload2State_TURRET"/>
`;
}

function getLightMachineGun(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardShockWave" ani="UseWeapon1State_SHOCK_WAVE_GUN"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_SHOCK_WAVE_GUN"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_SHOCK_WAVE_GUN"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_SHOCK_WAVE_GUN"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_SHOCK_WAVE_GUN"/>
`;
}


function getRocketLauncher(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardRocketLauncherNormal" ani="ANI_UseWeapon1State_RocketLauncher"/>
	<lua_func item_key="${newID}" state="right_attack" weapon="MultiShotRocketLauncherNormal" ani="ANI_UseWeapon2State_RocketLauncher"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_RocketLauncher"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_RocketLauncher"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_RocketLauncher"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_RocketLauncher"/>
`;
}


function getRailGun(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardRailgun" ani="UseWeapon1State_AimedShotAttack"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_Rifle"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_Rifle"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_Rifle"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_Rifle"/>
`;
}


function getCannon(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardCannonade" ani="UseWeapon1State_AimedShotAttack"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_Cannonade"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_Cannonade"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_Cannonade"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_Cannonade"/>
`;
}


function getSharpshooting(newID){
	return `
    <lua_func item_key="${newID}" state="right_weak" weapon="StandardZoomIn2" ani="UseWeapon1State_StandardAimedShotZoomIn"/>
	<lua_func item_key="${newID}" state="right_strong" weapon="StandardZoomIn2" ani="UseWeapon1State_StandardAimedShotZoomIn"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_StandardRailGun"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_StandardRailGun"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_StandardRailGun"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_StandardRailGun"/>
`;
}


function getSentryGun(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" ani="UseWeapon1State_SentryGunBuilder"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_SentryGunBuilder"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_SentryGunBuilder"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_SentryGunBuilder"/>
`;
}

function getSentryStun(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" ani="UseWeapon1State_SentiwallBuilder"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_SentiwallBuilder"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_SentiwallBuilder"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_SentiwallBuilder"/>
`;
}


function getMineGun(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardMineLaunch" ani="UseWeapon1State_MineLauncher"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_MineLauncher"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_MineLauncher"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_MineLauncher"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_MineLauncher"/>
`;
}

function getEarthBomb(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardEarthBomber" ani="UseWeapon1State_EARTH_BOMBER"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_EARTH_BOMBER"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_EARTH_BOMBER"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_EARTH_BOMBER"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_EARTH_BOMBER"/>
`;
}


function getLightBomb(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardLightningBomber" ani="UseWeapon1State_EARTH_BOMBER"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_EARTH_BOMBER"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_EARTH_BOMBER"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_EARTH_BOMBER"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_EARTH_BOMBER"/>
`;
}

function getRescueGun(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="StandardRescueGunLaunch" ani="UseWeapon1State_RESCUE_GUN"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_RESCUE_GUN"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_RESCUE_GUN"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_RESCUE_GUN"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_RESCUE_GUN"/>
`;
}

function getMindHeal(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="MindHeal" ani="UseWeapon1State_MindEnergy1"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_MindEnergy"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_MindEnergy"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_MindEnergy"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_MindEnergy"/>
`;
}

function getMindShock(newID){
	return `
    <lua_func item_key="${newID}" state="left_attack" weapon="MindAttack" ani="UseWeapon1State_MindStorm"/>
	<lua_func item_key="${newID}" state="normal" ani="NormalState_MinStorm"/>
	<lua_func item_key="${newID}" state="run" ani="RunState_MinStorm"/>
	<lua_func item_key="${newID}" state="damage" ani="DamageState_MinStorm"/>
	<lua_func item_key="${newID}" state="reload" ani="ReloadState_MinStorm"/>
`;
}




module.exports = {
	getPlasmaSword,
	getCounterSword,
	getBat,
	getDagger,
	getKatana,
	getVitalClaw,
	getTwinBlades,
	getBreaker,
	getSigmaBlade,
	getExo,
	getIronBoots,
	getFist,
	getSubmachine,
	getRevolver,
	getHandGun,
	getSemiRifle,
	getSmash,
	getShotGun,
	getHoming,
	getAirGun,
	getSparkRifle,
	getAssault,
	getDualMagnum,
	getHeavyMachineGun,
	getGauss,
	getTurrent,
	getLightMachineGun,
	getRocketLauncher,
	getRailGun,
	getCannon,
	getSharpshooting,
	getSentryGun,
	getSentryStun,
	getEarthBomb,
	getLightBomb,
	getMineGun,
	getRescueGun,
	getMindHeal,
	getMindShock
};










