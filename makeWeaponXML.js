function MakePlasmaSwordXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Plasma XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="0" category="1" rate_of_fire="1" power="9" move_speed_rate="1.1" attack_move_speed_rate="1" magazine_capacity="-1" cracked_magazine_capacity="-1" max_ammo="-1" max_ammo_limit="-1" accuracy="0" range="400" />
    <scene value1="${scn}" />
    <resources reload_sound_file="sword_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sword_plasma" crosshair_zoomin_file="crosshair_sword_plasma" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeCounterSwordXML(id, scn , dds){
     if(!id || !scn || !dds ){
    console.error('Some files are not defined at Make Counter Sword XML Desc.');
    return false;
    }

    return `
     <weapon item_key="${id}">
    <ability type="1" category="1" rate_of_fire="1" power="10" move_speed_rate="1.1" attack_move_speed_rate="1" magazine_capacity="-1" cracked_magazine_capacity="-1" max_ammo="-1" max_ammo_limit="-1" accuracy="0" range="500" />
    <scene value1="${scn.split('.')[0] + '_r.scn'}" value2="${scn.split('.')[0] + '_l.scn'}" />
    <resources reload_sound_file="bsword_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sword_plasma" crosshair_zoomin_file="crosshair_sword_plasma" />
    <sequence />
    <other_effects other_type="counter_sword" attack_seq="weapon_counter_upper02.seq" attack_ogg="bsword_counter.ogg" />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeBatXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Bat XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="13" category="1" rate_of_fire="1" power="17" move_speed_rate="1.1" attack_move_speed_rate="1" magazine_capacity="-1" cracked_magazine_capacity="-1" max_ammo="-1" max_ammo_limit="-1" accuracy="0" range="500" />
    <scene value1="${scn}" />
    <resources reload_sound_file="sword_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sword_plasma" crosshair_zoomin_file="crosshair_sword_plasma" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeVitalClawXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Vital Shock XML Desc.');
    return false;
    }

    return `
   <weapon item_key="${id}">
    <ability type="54" category="1" rate_of_fire="1" power="5" move_speed_rate="1.2" attack_move_speed_rate="1" magazine_capacity="-1" cracked_magazine_capacity="-1" max_ammo="-1" max_ammo_limit="-1" accuracy="0" range="500" />
    <scene value1="${scn}" />
    <resources reload_sound_file="sword_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sword_plasma" crosshair_zoomin_file="crosshair_sword_plasma" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeDaggerXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Dagger XML Desc.');
    return false;
    }

    return `
     <weapon item_key="${id}">
    <ability type="24" category="1" rate_of_fire="1" power="10.0" move_speed_rate="1.2" attack_move_speed_rate="1.2" magazine_capacity="-1" cracked_magazine_capacity="-1" max_ammo="-1" max_ammo_limit="-1" accuracy="0" range="250" />
    <scene value1="${scn}" />
    <resources reload_sound_file="sword_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sword_plasma" crosshair_zoomin_file="crosshair_sword_plasma" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeTwinBladesXML(id, scn, dds){
     if(!id || !scn || !dds ){
    console.error('Some files are not defined at Make Twin Blades XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="26" category="1" rate_of_fire="1" power="15" move_speed_rate="1.1" attack_move_speed_rate="1" magazine_capacity="-1" cracked_magazine_capacity="-1" max_ammo="-1" max_ammo_limit="-1" accuracy="0" range="500" charge_power_rate="3" />
    <scene value1="${scn.split('.')[0] + '_r.scn'}" value2="${scn.split('.')[0] + '_l.scn'}" />
    <resources reload_sound_file="bsword_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sword_plasma" crosshair_zoomin_file="crosshair_sword_plasma" />
    <sequence />
    <other_effects other_type="twin_blade" charge_normal_seq="weapon_twinseord_charge.seq" charge_normal_ogg="twinsword_charge.ogg" charge_max_seq="weapon_twinseord_charge_loop.seq" charge_max_ogg="twinsword_charge_full.ogg" />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeBreakerXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Breaker XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="33" category="1" rate_of_fire="1" power="22.5" move_speed_rate="1" attack_move_speed_rate="0.95" magazine_capacity="-1" cracked_magazine_capacity="-1" max_ammo="-1" max_ammo_limit="-1" accuracy="0" range="500" charge_power_rate="2" />
    <scene value1="${scn}" />
    <resources reload_sound_file="sword_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sword_plasma" crosshair_zoomin_file="crosshair_sword_plasma" />
    <sequence />
    <other_effects other_type="twin_blade" charge_normal_seq="weapon_breaker_charge.seq" charge_normal_ogg="breaker_charge.ogg" charge_max_seq="weapon_breaker_charge_loop.seq" charge_max_ogg="breaker_charge_full.ogg" />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeSigmaBladeXML(id, scn , dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Sigma Blade XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="38" category="1" rate_of_fire="1" power="10.0" move_speed_rate="1.1" attack_move_speed_rate="1" magazine_capacity="-1" cracked_magazine_capacity="-1" max_ammo="-1" max_ammo_limit="-1" accuracy="0" range="500" />
    <scene value1="${scn}" value2="${scn.split('.')[0] + '_change.scn'}" />
    <resources reload_sound_file="bsword_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sword_plasma" crosshair_zoomin_file="crosshair_sword_plasma" />
    <sequence count="4" file_name_1="sigmablade_body_change.seq" file_name_2="sigmablade_body_un_change.seq" node_name_3="Sigma_Effect_Dummy" file_name_3="sigmablade_golw.seq" />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeKatanaXML(id, scn, dds){
     if(!id || !scn || !dds ){
    console.error('Some files are not defined at Make Katana XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="39" category="1" rate_of_fire="1" power="10" move_speed_rate="1.1" attack_move_speed_rate="1" magazine_capacity="-1" cracked_magazine_capacity="-1" max_ammo="-1" max_ammo_limit="-1" accuracy="0" range="500" charge_power_rate="2" />
    <scene value1="${scn.split('.')[0] + '_case.scn'}" value2="${scn}" />
    <resources reload_sound_file="bsword_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sword_plasma" crosshair_zoomin_file="crosshair_sword_plasma" />
    <sequence />
    <other_effects other_type="twin_blade" charge_normal_seq="katana_charge2.seq" charge_normal_ogg="katana_charge.ogg" />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeExoXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Exo XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="42" category="1" rate_of_fire="1" power="17" move_speed_rate="1.1" attack_move_speed_rate="1" magazine_capacity="-1" cracked_magazine_capacity="-1" max_ammo="-1" max_ammo_limit="-1" accuracy="0" range="500" />
    <scene value1="${scn}" />
    <resources reload_sound_file="bsword_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sword_plasma" crosshair_zoomin_file="crosshair_sword_plasma" />
    <sequence />
    <other_effects other_type="counter_sword" attack_seq="weapon_counter_upper02.seq" attack_ogg="bsword_counter.ogg" />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeIronBootsXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Iron Boots XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="43" category="1" rate_of_fire="1" power="15" move_speed_rate="1.3" attack_move_speed_rate="1" magazine_capacity="-1" cracked_magazine_capacity="-1" max_ammo="-1" max_ammo_limit="-1" accuracy="0" range="500" />
    <scene value1="${scn}" />
    <resources reload_sound_file="bsword_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sword_plasma" crosshair_zoomin_file="crosshair_sword_plasma" />
    <sequence />
    <other_effects other_type="counter_sword" attack_seq="weapon_counter_upper03.seq" attack_ogg="bsword_counter.ogg" />
    <sequence2 />
  </weapon>
    `;
 
}

function MakeFistXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Fist XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="47" category="1" rate_of_fire="1" power="15" move_speed_rate="1.1" attack_move_speed_rate="1" magazine_capacity="-1" cracked_magazine_capacity="-1" max_ammo="-1" max_ammo_limit="-1" accuracy="0" range="500" />
   <scene value1="${scn.split('.')[0] + '_r.scn'}" value2="${scn.split('.')[0] + '_l.scn'}" />
    <resources reload_sound_file="bsword_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sword_plasma" crosshair_zoomin_file="crosshair_sword_plasma" />
    <sequence />
    <other_effects other_type="counter_sword" attack_seq="weapon_counter_upper02.seq" attack_ogg="bsword_counter.ogg" />
    <sequence2 />
  </weapon>
    `;
 
}


/// here starts GUN WEAPONS TYPE FUCK MY LIFE I HAVE TO DO ALL THESE ONE BY ONE! A NEVER ENDING JOB ON MY OWN!.



function MakeAirGunXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make AirGun XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="27" category="3" rate_of_fire="0.8" power="10.0" move_speed_rate="1" attack_move_speed_rate="0.8" magazine_capacity="3" cracked_magazine_capacity="1" max_ammo="3" max_ammo_limit="3" accuracy="0" charge_power_rate="2.5" />
    <scene value1="${scn}" />
    <resources reload_sound_file="airgun_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_air" crosshair_zoomin_file="crosshair_gun_air" />
    <sequence />
    <other_effects other_type="snipe" charge_normal_seq="weapon_airgun_smog.seq" charge_normal_ogg="airgun_charge_ing.ogg" charge_max_seq="weapon_airgun_smog.seq" charge_max_ogg="airgun_charge_complete.ogg" charge_normal_parent="Railgun_Fire_Dummy" charge_normal_attack_seq="weapon_airgun_rail.seq" charge_normal_attack_ogg="airgun_blast.ogg" charge_max_parent="Railgun_Fire_Dummy" charge_max_attack_seq="weapon_airgun_rail.seq" charge_max_attack_ogg="airgun_blast.ogg" />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeAssaultXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Assault XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="34" category="2" rate_of_fire="7.5" power="7.5" move_speed_rate="1" attack_move_speed_rate="1" magazine_capacity="30" cracked_magazine_capacity="8" max_ammo="60" max_ammo_limit="-1" accuracy="0.03" />
    <scene value1="${scn}" />
    <resources reload_sound_file="assultrifle_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_revolver" crosshair_zoomin_file="crosshair_gun_homing" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeCannonXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Cannon XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="7" category="5" rate_of_fire="0.6" power="18" move_speed_rate="1" attack_move_speed_rate="0.7" magazine_capacity="5" cracked_magazine_capacity="2" max_ammo="15" max_ammo_limit="-1" accuracy="0" range="400" charge_power_rate="2.5" support_sniper_mode="1" sniper_mode_fov="15" />
    <scene value1="${scn}" />
    <resources reload_sound_file="brail_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_connonade" crosshair_zoomin_file="crosshair_gun_connonade_zoomin" />
    <sequence />
    <other_effects other_type="snipe" charge_normal_seq="weapon_canon_charge.seq" charge_normal_ogg="brail_charge.ogg" charge_max_seq="weapon_canon_charge_loop.seq" charge_max_ogg="brail_charge_complete.ogg" charge_normal_parent="AreaRailgun_Fire_Dummy" charge_normal_attack_seq="weapon_canon_fire.seq" charge_normal_attack_ogg="brail_blast.ogg" charge_max_parent="AreaRailgun_Fire_Dummy" charge_max_attack_seq="weapon_canon_fire_max.seq" charge_max_attack_ogg="brail_blast_max.ogg" />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeSmashXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Smash XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="21" category="2" rate_of_fire="8" power="5.5" move_speed_rate="1" attack_move_speed_rate="1" magazine_capacity="40" cracked_magazine_capacity="10" max_ammo="50" max_ammo_limit="-1" accuracy="0.025" range="500" />
    <scene value1="${scn}" />
    <resources reload_sound_file="smg3_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_revolver" crosshair_zoomin_file="crosshair_gun_rail_zoomin" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeDualMagnumXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make DualMagnum XML Desc.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="41" category="2" rate_of_fire="8" power="5" move_speed_rate="1" attack_move_speed_rate="1" magazine_capacity="22" cracked_magazine_capacity="10" max_ammo="66" max_ammo_limit="-1" accuracy="0.03" range="1000" />
    <scene value1="${'r_' + scn}" value2="${'l_' + scn}" />
    <resources reload_sound_file="smg_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_revolver" crosshair_zoomin_file="crosshair_gun_revolver" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeEarthBombXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make EarthBomb XML Desc.');
    return false;
    }

    return `
     <weapon item_key="${id}">
    <ability type="29" category="8" rate_of_fire="0.1" power="65" move_speed_rate="1" attack_move_speed_rate="1" magazine_capacity="1" cracked_magazine_capacity="1" max_ammo="0" max_ammo_limit="0" accuracy="0" range="1200" />
    <scene value1="${scn}" />
    <resources reload_sound_file="grenade_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_mine" crosshair_zoomin_file="crosshair_gun_mine" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeHomingXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Homing XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="28" category="2" rate_of_fire="7" power="4" move_speed_rate="1" attack_move_speed_rate="0.8" magazine_capacity="30" cracked_magazine_capacity="8" max_ammo="60" max_ammo_limit="60" accuracy="0" rand_dmg_min="-3" rand_dmg_max="3" rand_dmg_prob="100" />
    <scene value1="${scn}" />
    <resources reload_sound_file="homing_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_homing" crosshair_zoomin_file="crosshair_gun_homing" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeSparkRifleXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make SparkRifle XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="32" category="2" rate_of_fire="6" power="4" move_speed_rate="1" attack_move_speed_rate="0.8" magazine_capacity="30" cracked_magazine_capacity="8" max_ammo="60" max_ammo_limit="60" accuracy="0" />
    <scene value1="${scn}" />
    <resources reload_sound_file="homing_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_homing" crosshair_zoomin_file="crosshair_gun_homing" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeGaussXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Gauss XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="16" category="2" rate_of_fire="6" power="9" move_speed_rate="1" attack_move_speed_rate="0.7" magazine_capacity="25" cracked_magazine_capacity="10" max_ammo="60" max_ammo_limit="-1" accuracy="0.15" />
    <scene value1="${scn}" />
    <resources reload_sound_file="mg2_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_revolver" crosshair_zoomin_file="crosshair_gun_revolver" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}





function MakeHandGunXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make HandGun XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="22" category="3" rate_of_fire="2.5" power="8.4" move_speed_rate="1.2" attack_move_speed_rate="1.2" magazine_capacity="15" cracked_magazine_capacity="10" max_ammo="30" max_ammo_limit="-1" accuracy="0.03" range="1000" />
    <scene value1="${scn}" />
    <resources reload_sound_file="revo_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_revolver" crosshair_zoomin_file="crosshair_gun_revolver" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeHeavyMachineGunXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make HMG XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="5" category="4" rate_of_fire="8" power="11" move_speed_rate="0.85" attack_move_speed_rate="0.7" magazine_capacity="100" cracked_magazine_capacity="30" max_ammo="100" max_ammo_limit="-1" accuracy="0.06" />
    <scene value1="${scn}" />
    <resources reload_sound_file="hmg_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_revolver" crosshair_zoomin_file="crosshair_gun_rail_zoomin" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeLightBombXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at MakeLightBombXML.');
    return false;
    }

    return `
     <weapon item_key="${id}">
    <ability type="30" category="8" rate_of_fire="0.1" power="1.5" move_speed_rate="1" attack_move_speed_rate="1" magazine_capacity="1" cracked_magazine_capacity="1" max_ammo="0" max_ammo_limit="0" accuracy="0" range="1000" />
    <scene value1="${scn}" />
    <resources reload_sound_file="grenade_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_mine" crosshair_zoomin_file="crosshair_gun_mine" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeLightMachineGunXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Light Machine Gun XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="31" category="4" rate_of_fire="9.5" power="4.5" move_speed_rate="0.9" attack_move_speed_rate="0.8" magazine_capacity="100" cracked_magazine_capacity="4" max_ammo="500" max_ammo_limit="-1" accuracy="0.06" />
    <scene value1="${scn}" />
    <resources reload_sound_file="shockwave_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_light_machinegun" crosshair_zoomin_file="crosshair_gun_light_machinegun" />
    <sequence count="1" node_name_1="chainlightninng_upperbody_Dummy" file_name_1="lightninnggun_body.seq" />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeMindHealXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Gauss XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="11" category="7" rate_of_fire="3" power="10.05" move_speed_rate="0.9" attack_move_speed_rate="0.9" magazine_capacity="20" cracked_magazine_capacity="4" max_ammo="60" max_ammo_limit="-1" accuracy="1" range="3000" />
    <scene value1="${scn}" />
    <resources reload_sound_file="mindenergy_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_mind_energy" crosshair_zoomin_file="crosshair_mind_energy" />
    <sequence />
    <other_effects other_type="mind" attack_seq="skill_hacker_mindenergy_enemy_body.seq" attack_ogg="mindenergy_enemy.ogg" heal_seq="global_heal.seq" heal_ogg="mindenergy_team.ogg" attack_line_1_seq="skill_hacker_mindenergy_enemy_line1.seq" attack_line_2_seq="skill_hacker_mindenergy_enemy_line2.seq" attack_line_3_seq="skill_hacker_mindenergy_enemy_line3.seq" heal_line_1_seq="skill_hacker_mindenergy_team_line1.seq" heal_line_2_seq="skill_hacker_mindenergy_team_line2.seq" heal_line_3_seq="skill_hacker_mindenergy_team_line3.seq" attack_hand_seq="skill_hacker_mindenergy_enemy_hand.seq" heal_hand_seq="skill_hacker_mindenergy_team_hand.seq" />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeMindShockXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Gauss XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="12" category="7" rate_of_fire="3" power="15" move_speed_rate="0.9" attack_move_speed_rate="0.9" magazine_capacity="15" cracked_magazine_capacity="1" max_ammo="45" max_ammo_limit="-1" accuracy="1" range="2000" />
    <scene value1="${scn}" />
    <resources reload_sound_file="bmindenergy_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_mind_shock" crosshair_zoomin_file="crosshair_mind_shock" />
    <sequence />
    <other_effects other_type="mind" attack_seq="weapon_mindshock_body.seq" attack_ogg="bmindenergy_enemy.ogg" heal_seq="skill_hacker_mindenergy_team_body.seq" heal_ogg="bmindenergy_team.ogg" attack_line_1_seq="weapon_mindshock_line1.seq" attack_line_2_seq="weapon_mindshock_line1.seq" attack_line_3_seq="weapon_mindshock_line1.seq" heal_line_1_seq="skill_hacker_mindenergy_team_line1.seq" heal_line_2_seq="skill_hacker_mindenergy_team_line2.seq" heal_line_3_seq="skill_hacker_mindenergy_team_line3.seq" attack_hand_seq="skill_hacker_mindenergy_enemy_hand.seq" heal_hand_seq="skill_hacker_mindenergy_team_hand.seq" />
    <sequence2 />
  </weapon>
    `;
 
}


//It appears to not have the img src added here
function MakeRocketLauncherXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Rocket Launcher XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="45" category="8" rate_of_fire="0.85" power="48" move_speed_rate="0.8" attack_move_speed_rate="0.5" magazine_capacity="1" cracked_magazine_capacity="3" max_ammo="5" max_ammo_limit="5" accuracy="0" range="500" />
    <scene value1="${scn}" />
    <resources reload_sound_file="Rocket_load.ogg" />
    <sequence />
    <other_effects other_type="snipe" charge_normal_seq="weapon_RL_smog.seq" charge_normal_ogg="rocket_charge.ogg" charge_max_seq="weapon_RL_smog.seq" charge_max_ogg="airgun_charge_complete.ogg" charge_normal_parent="Minegun_Wea_Dummy" />
    <sequence2 count_2="1" node_name_2_1="Minegun_Wea_Dummy" file_name_2_1="weapon_RL_rail.seq" />
  </weapon>
    `;
 
}



function MakeMineGunXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Mine Gun XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="10" category="8" rate_of_fire="0.3" power="45" move_speed_rate="1" attack_move_speed_rate="1" magazine_capacity="1" cracked_magazine_capacity="1" max_ammo="4" max_ammo_limit="4" accuracy="0" range="500" />
    <scene value1="${scn}" />
    <resources reload_sound_file="grenade_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_mine" crosshair_zoomin_file="crosshair_gun_mine" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeSemiRifleXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Semi Rifle XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="4" category="2" rate_of_fire="8" power="5.3" move_speed_rate="1" attack_move_speed_rate="0.9" magazine_capacity="30" cracked_magazine_capacity="8" max_ammo="90" max_ammo_limit="-1" accuracy="0.01" support_sniper_mode="1" sniper_mode_fov="25" />
    <scene value1="${scn}" />
    <resources reload_sound_file="smg2_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_revolver" crosshair_zoomin_file="crosshair_gun_rail_zoomin" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeSentryGunXML(id, scn, dds){
     if(!id || !scn || !dds ){
    console.error('Some files are not defined at Make Gauss XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="8" category="6" rate_of_fire="0.5" power="5.5" move_speed_rate="1" attack_move_speed_rate="1" magazine_capacity="3" cracked_magazine_capacity="1" max_ammo="0" max_ammo_limit="0" accuracy="0" centry_type="1" />
    <scene value1="${scn.split('.')[0] + '_l.scn'}" value2="${scn.split('.')[0] + '_r.scn'}" />
    <resources reload_sound_file="sentrygun_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sentrygun" crosshair_zoomin_file="crosshair_sentrygun" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}





function MakeSentryStunXML(id, scn, dds){
     if(!id || !scn || !dds ){
    console.error('Some files are not defined at Make Gauss XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="36" category="6" rate_of_fire="0.3" power="15" move_speed_rate="1" attack_move_speed_rate="1" magazine_capacity="3" cracked_magazine_capacity="1" max_ammo="0" max_ammo_limit="0" accuracy="0" centry_type="17" />
    <scene value1="${scn.split('.')[0] + 'l.scn'}" value2="${scn.split('.')[0] + 'r.scn'}" />
    <resources reload_sound_file="sentrygun_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_sentrygun" crosshair_zoomin_file="crosshair_sentrygun" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}




function MakeSharpshootingXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Sharpshooting XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="40" category="5" rate_of_fire="0.8" power="30" move_speed_rate="0.85" attack_move_speed_rate="0.7" magazine_capacity="1" cracked_magazine_capacity="1" max_ammo="11" max_ammo_limit="11" accuracy="0" charge_power_rate="1" sniper_mode_fov="11" new_snipe_mode="1" />
    <scene value1="${scn}" />
    <resources reload_sound_file="sharpshooter_reload.ogg" slot_image_file="${dds}" crosshair_zoomin_file="crosshair_gun_standardrail_zoomin" />
    <sequence />
    <other_effects charge_normal_ogg="snipe" charge_normal_parent="skill_gunner_chargeshot_charge.seq" charge_normal_attack_seq="rail_charge.ogg" charge_normal_attack_ogg="skill_gunner_chargeshot_chargemax.seq" charge_max_parent="rail_charge_complete.ogg" charge_max_attack_seq="Railgun_Fire_Dummy" charge_max_attack_ogg="skill_gunner_chargeshot_rail.seq" heal_seq="rail_blast.ogg" heal_ogg="Railgun_Fire_Dummy" attack_line_1_seq="skill_gunner_chargeshot_rail_max.seq" attack_line_2_seq="rail_blast_max.ogg" />
    <sequence2 />
  </weapon>
    `;
 
}




function MakeRailGunXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make RailGun XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="6" category="5" rate_of_fire="2" power="7.8" move_speed_rate="1" attack_move_speed_rate="0.8" magazine_capacity="8" cracked_magazine_capacity="1" max_ammo="12" max_ammo_limit="-1" accuracy="0" charge_power_rate="5" support_sniper_mode="1" sniper_mode_fov="23" />
    <scene value1="${scn}" />
    <resources reload_sound_file="rail_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_rail" crosshair_zoomin_file="crosshair_gun_rail_zoomin" />
    <sequence />
    <other_effects other_type="snipe" charge_normal_seq="skill_gunner_chargeshot_charge.seq" charge_normal_ogg="rail_charge.ogg" charge_max_seq="skill_gunner_chargeshot_chargemax.seq" charge_max_ogg="rail_charge_complete.ogg" charge_normal_parent="Railgun_Fire_Dummy" charge_normal_attack_seq="skill_gunner_chargeshot_rail.seq" charge_normal_attack_ogg="rail_blast.ogg" charge_max_parent="Railgun_Fire_Dummy" charge_max_attack_seq="skill_gunner_chargeshot_rail_max.seq" charge_max_attack_ogg="rail_blast_max.ogg" />
    <sequence2 />
  </weapon>
    `;
 
}



function MakeShotGunXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make ShotGun XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="23" category="3" rate_of_fire="1.2" power="27" move_speed_rate="1" attack_move_speed_rate="0.9" magazine_capacity="8" cracked_magazine_capacity="4" max_ammo="16" max_ammo_limit="-1" accuracy="0.07" range="1000" />
    <scene value1="${scn}" />
    <resources reload_sound_file="burstshotgun_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_revolver" crosshair_zoomin_file="crosshair_gun_revolver" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}




function MakeRevolverXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Gauss XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="3" category="3" rate_of_fire="1.2" power="30" move_speed_rate="1" attack_move_speed_rate="0.9" magazine_capacity="7" cracked_magazine_capacity="4" max_ammo="14" max_ammo_limit="-1" accuracy="0.08" range="1000" />
    <scene value1="${scn}" />
    <resources reload_sound_file="revo_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_revolver" crosshair_zoomin_file="crosshair_gun_revolver" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}


function MakeSubmachineXML(id, scn, dds){
     if(!id || !scn || !dds){
    console.error('Some files are not defined at Make Submachine XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="2" category="2" rate_of_fire="8" power="7" move_speed_rate="1" attack_move_speed_rate="1" magazine_capacity="36" cracked_magazine_capacity="10" max_ammo="90" max_ammo_limit="-1" accuracy="0.04" />
    <scene value1="${scn.split('.')[0] + '_r.scn'}" value2="${scn.split('.')[0] + '_l.scn'}" />
    <resources reload_sound_file="smg_reload.ogg" slot_image_file="slot_gun_sub.tga" crosshair_file="crosshair_gun_revolver" crosshair_zoomin_file="crosshair_gun_revolver" />
    <sequence />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}


function MaketurretXML(id, scn, dds){
     if(!id || !scn || !scn2 || !scn3 || !scn4 || !scn5 || !dds){
    console.error('Some files are not defined at Make turret XML.');
    return false;
    }

    return `
    <weapon item_key="${id}">
    <ability type="37" category="4" rate_of_fire="9" power="12" move_speed_rate="0.7" attack_move_speed_rate="0.4" magazine_capacity="100" cracked_magazine_capacity="30" max_ammo="100" max_ammo_limit="-1" accuracy="0.05" />
    <scene value1="${scn.split('.')[0] + '_l.scn'}" value2="${scn.split('.')[0] + '_r.scn'}" value3="${scn.split('.')[0] + '_backpak.scn'}" value4="${scn}" value5="${scn.split('.')[0] + '_gun.scn'}" />
    <resources reload_sound_file="turret_reload.ogg" slot_image_file="${dds}" crosshair_file="crosshair_gun_turret" crosshair_zoomin_file="crosshair_gun_turret" />
    <sequence count="4" node_name_1="Bip01" file_name_1="turret_trans.seq" node_name_2="Bip01" file_name_2="turret_trans_un.seq" node_name_3="Bip01" file_name_3="turret_trans_etex.seq" node_name_4="Bip01" file_name_4="turret_trans_un_etex.seq" />
    <other_effects />
    <sequence2 />
  </weapon>
    `;
 
}








 module.exports = {
        MakePlasmaSwordXML,
        MakeCounterSwordXML,MakeBatXML , MakeVitalClawXML, MakeDaggerXML, MakeTwinBladesXML, MakeBreakerXML, MakeSigmaBladeXML, MakeKatanaXML, MakeExoXML, MakeIronBootsXML, MakeFistXML, MakeAirGunXML,
         MakeAssaultXML, MakeCannonXML, MakeSmashXML, MakeDualMagnumXML, MakeEarthBombXML, MakeHomingXML, MakeSparkRifleXML, MakeGaussXML, MakeHandGunXML, MakeHeavyMachineGunXML, MakeLightBombXML,
         MakeLightMachineGunXML, MakeMindHealXML, MakeMindShockXML, MakeRocketLauncherXML, MakeMineGunXML, MakeSemiRifleXML, MakeSentryGunXML, MakeSentryStunXML, MakeSharpshootingXML, MakeRailGunXML, MakeShotGunXML, MakeRevolverXML, MakeSubmachineXML, MaketurretXML

    }